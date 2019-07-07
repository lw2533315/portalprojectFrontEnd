import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/admin/domain/employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emailtrieve',
  templateUrl: './emailtrieve.component.html',
  styleUrls: ['./emailtrieve.component.css']
})
export class EmailtrieveComponent implements OnInit {
  email:string;
  errorinfo:string;

  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit() {
  }


  sendEmail(){
    this.service.sendEmail(this.email).subscribe(resp=>{
      console.log(this.email);
      if(resp == null ){
        this.errorinfo = "no the email in the database"
      }else{
        console.log("redirect")
        this.router.navigate(['home'])
      }
    });
  }

}
