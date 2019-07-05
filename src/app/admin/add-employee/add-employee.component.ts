import { Component, OnInit } from '@angular/core';
import { Employee } from '../domain/employee'; 
import { Address } from '../domain/address';
import { User } from '../domain/user';
import { AdminService} from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TotalInfo } from '../domain/total-info';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee = new Employee();
  address = new Address();
  user = new User();
  totalinfo = new TotalInfo();
  back:string;
  errorinfo:string = "";

  constructor(private adminService:AdminService, private route: ActivatedRoute, private router: Router) {
    this.employee.salution = 'Mr';
    this.employee.status = 'full-time';
    this.employee.gender = 'male';
    this.employee.department = 'JAVA';
    // this.employee.middleName ='';
    // this.address.address2='';
   }

  ngOnInit() {
  }

  //insert a new employee data to database
  //call admin server method addTimesheet
  //check the back value
  createNewEmployee() {
    console.log(this.employee)
    console.log(this.address)
    console.log(this.user)
    this.user.role = 'emp';      //add guy with emp authorization
    this.totalinfo.address = this.address;
    this.totalinfo.employee = this.employee;
    this.totalinfo.user = this.user;
    this.adminService.saveEmployeeInformation(this.totalinfo).subscribe((resp) => {
      this.back= resp;
      console.log(this.back)
      if(this.back=="error" ||this.back=="false" ){
        this.errorinfo = "log in expiration";
      }
    })
  }

}
