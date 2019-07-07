import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  password:string
  repeatpassword:string
  tokenParam:string;
  id:string;
  errorinfo:string

  constructor(private service:EmployeeService, private activatedRouter: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(params=> {
      console.log("get parameter");
      // console.log(param);
      this.tokenParam = params["token"];
      this.id = params["id"]
      console.log(this.tokenParam);
      if(this.tokenParam == null || this.tokenParam == ""){
        this.errorinfo = "error!!!";
      
      }
    })
  }

  resetPassword(){
    this.service.resetpassword(this.tokenParam, this.repeatpassword, this.id).subscribe(resp=>{
      if(resp == "done"){
        this.router.navigate(['employeelogin'])
      }else{
        this.errorinfo = "error!!!";
      }
    });
  }

}
