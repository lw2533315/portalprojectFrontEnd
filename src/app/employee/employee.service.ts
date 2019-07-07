import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
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
  username:string;

  employeeurl:string = "http://localhost:8103/auth/emp"
   //headerr
  headers:any = new Headers( {  
    'Content-Type':  'application/json',
  });
  constructor(private http:HttpClient) {
    if(localStorage.getItem("token") != null){
      this.username = JSON.parse(localStorage.getItem("token")).username;
    }
  }


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


  //find the employee salary recorder
  getSalary(){
    return this.http.get<Salary>(this.employeeurl + `/salary/${this.username}`,
     {headers: this.headers, responseType:"json" } ) 
  }

  
  // add one leave request to backend
  addLeave(vacation:Vacation){
      
      console.log(vacation)
      return this.http.post(this.employeeurl + `/vacation/${this.username}`, vacation, {headers:this.headers, responseType:"text"});
  }
  
  //find the employee all leave recorder
  findLeaves(){
    return this.http.get<Vacation[]>(this.employeeurl + `/vacations/${this.username}`,{headers: this.headers, responseType:"json" }   )
  }


  //ask backend send email to reset password
  sendEmail(email:string){
    console.log(email);
    return this.http.get(this.employeeurl + "/email?email="+email, {headers: this.headers, responseType:"json" }   )

  }

  //ask backend persist the password
  resetpassword(token:string, repeatpassword:string, id:string){
    console.log(token);
    return this.http.post(this.employeeurl + "/password?id="+id+"&token="+token+ "&password="+repeatpassword, {headers: this.headers, responseType:"text" }   )
  }

 








  


}
