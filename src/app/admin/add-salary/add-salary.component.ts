import { Component, OnInit, OnChanges } from '@angular/core';
import { AdminService} from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Salary } from '../domain/salary';
import { Employee } from '../domain/employee';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit {
  salary = new Salary();
  employees:any
  errorinfo:string
  days:number[];
  empIdx:number 


  constructor(private adminService : AdminService) {
    this.days = [5, 15, 25, ]
  }

  ngOnInit() {
    this.adminService.findAllEmployees().subscribe(resp=>{
      if(resp == null){
        this.errorinfo = "login expiration"
      }else{
        this.employees = resp;
        console.log(this.employees);
      }
    });    
   
  }

  



  addSalary(){
    this.salary.empName = this.employees[this.empIdx].firstName + " " + this.employees[this.empIdx].lastName;
    this.salary.empId = this.employees[this.empIdx].id;
    console.log(this.salary)

    this.adminService.addSalary(this.salary).subscribe();
  }

}
