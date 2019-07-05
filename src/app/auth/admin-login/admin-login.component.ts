import { Component, OnInit } from '@angular/core';
import {Authuser} from '../model/authuser';
import { AuthService } from '../auth.service';
import { JwtObj } from '../model/jwt-obj';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  user = new Authuser();
  token:string;
  jwt = new JwtObj();
  jwtHelper = new JwtHelperService();

  constructor(private service:AuthService, private router:Router){}


  ngOnInit() {
  }

  adminloginfunc(){
    this.service.emplogin(this.user).subscribe(
      resp =>{
        this.token = resp
        if(this.token == ""){
          console.log("return emplty")
        }else{
          this.jwt.token = this.token;
          this.jwt.expiration = this.jwtHelper.getTokenExpirationDate(this.token);
          this.jwt.username = this.user.username;
          this.jwt.role = "admin";
          console.log(this.jwt);
          localStorage.setItem("token", JSON.stringify(this.jwt));

           //need to do jump to employee home page,not exist
          // this.router.navigate(["emp"]);
          window.location.href="/home"
        }

      }
    )
  }



}
