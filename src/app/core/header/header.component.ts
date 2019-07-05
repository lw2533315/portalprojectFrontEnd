import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  adminLoggedIn: boolean;
  empLoggedIn: boolean;
  empStatus: boolean = false;
  adminStatus:boolean = false;
  jwtHelper = new JwtHelperService;

  constructor() { }

  ngOnInit() {
    // this.adminLoggedIn=true;
    this.empLoggedIn = true;
    
    if(localStorage.getItem("token") != null && JSON.parse(localStorage.getItem("token")).role == "emp" 
    && !this.jwtHelper.isTokenExpired(JSON.parse(localStorage.getItem("token")).token)){
      console.log("emp login ")
      this.empStatus = true;
    }

    if(localStorage.getItem("token") != null && JSON.parse(localStorage.getItem("token")).role == "admin" 
    && !this.jwtHelper.isTokenExpired(JSON.parse(localStorage.getItem("token")).token)){
      console.log("admin login")
      this.empStatus = true;
      this.adminStatus = true;
    }

  }

  //clear localstorage and update header status
  logout(){
    localStorage.removeItem("token");
    window.location.href="/home";
  }

}
