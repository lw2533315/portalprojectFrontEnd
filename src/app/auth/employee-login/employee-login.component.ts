import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, NgModule} from '@angular/core';
import { Authuser } from 'src/app/auth/model/authuser';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import{JwtObj} from 'src/app/auth/model/jwt-obj'




@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit, AfterViewChecked{
  username:any;
  password:any;
  jwt = new JwtObj();
  jwtHelper = new  JwtHelperService();

  authuser:Authuser;
  token:string;
  
  constructor(private service: AuthService, private router:Router) { }

  ngOnInit() {
  }

  ngAfterViewChecked(){
    
  }

  emploginfunc(){
    console.log(this.username);
    this.authuser = new Authuser();
    this.authuser.username=this.username;
    this.authuser.password = this.password;
    this.authuser.role = "emp";
    console.log(this.authuser);
 
    this.service.emplogin(this.authuser).subscribe(
      resp =>{
        this.token = resp
        if(this.token == ""){
          console.log("return is empty string")
        }
        else{
          
          //save token to localstorage for future authenticating
          this.jwt.token = this.token;
          this.jwt.expiration = this.jwtHelper.getTokenExpirationDate(this.token);
          this.jwt.username = this.authuser.username;
          this.jwt.role = "emp"
          console.log(this.jwt);
          localStorage.setItem("token", JSON.stringify(this.jwt));

           //need to do jump to employee home page,not exist
          // this.router.navigate(["home"]);
          //do not user router.navigate, since need update header's status
          window.location.href = "/home";
        }

      }
    )
    
    


    // this.service.login(this.authuser).subscribe((resp:string)=>this.token = resp);
    // console.log(this.token);
  }
}
