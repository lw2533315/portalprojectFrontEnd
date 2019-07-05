import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Timesheet } from './model/timesheet';
import { Project } from '../admin/domain/project';
import { Salary } from '../admin/domain/salary';
import { Vacation } from '../admin/domain/vacation';





@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //header
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  //find username from token
  username:string = JSON.parse(localStorage.getItem("token")).username;

  employeeurl:string = "http://localhost:8103/auth/emp"
   //headerr
  headers:any = new Headers( {  
    'Content-Type':  'application/json',
  });
  constructor(private http:HttpClient) {}


  // when refresh page update timesheet and view timesheet all call these one 
  getTimesheet():Observable<object>{
    console.log("test: " + this.username);
    return this.http.get<Timesheet[]>(this.employeeurl + `/timesheet/${this.username}`, 
    {headers: this.headers, responseType:"json" });
  }
  
  //get all projects
  getProjects(){
    return this.http.get<Project[]>(this.employeeurl + `/project`, 
    {headers: this.headers, responseType:"json" });
  }

  
  //update timesheet 
  updateTimeSheet(timesheet:Object){
    console.log(timesheet);
    // return this.http.put(this.url + `/timesheet/${id}`, timesheet)
    return this.http.put(this.employeeurl + `/timesheet`, timesheet,
     {headers: this.headers, responseType:"text" } ) 
  }


   
  getSalary(){
    return this.http.get<Salary>(this.employeeurl + `/salary/${this.username}`,
     {headers: this.headers, responseType:"json" } ) 
  }

  
  // add one leave request to backend
  addLeave(vacation:Vacation){
      
      console.log(vacation)
      return this.http.post(this.employeeurl + `/vacation/${this.username}`, vacation, {headers:this.headers, responseType:"text"});
  }
  

  findLeaves(){
    return this.http.get<Vacation[]>(this.employeeurl + `/vacations/${this.username}`,{headers: this.headers, responseType:"json" }   )
  }

 








  


}
