import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee/employee.service';
import {Timesheet} from 'src/app/employee/model/timesheet';
import { Project } from 'src/app/admin/domain/project';

@Component({
  selector: 'app-update-timesheet',
  templateUrl: './update-timesheet.component.html',
  styleUrls: ['./update-timesheet.component.css']
})
export class UpdateTimesheetComponent implements OnInit, AfterViewInit {
  timesheet = new Timesheet();
  errorinfo:string;
  timesheets:any;
  projects:any;
  project = new Project();



 
 

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getTimesheet().subscribe(resp=>{
      console.log(resp)
      if(resp == null){
        this.errorinfo = "login expiration";
      }else{
        this.timesheets = resp;
        console.log(this.timesheets);
      }
    })

    
  }

  ngAfterViewInit(){
    this.service.getProjects().subscribe(resp=>{
      if(resp == null){
        this.errorinfo = "login expiration";
      }else{
        this.projects = resp;
        console.log(this.projects);
      }
    });
  }

  //update timesheet, if return is null ,update fail
  updateTimesheet(idx:number){
    console.log(this.timesheets[idx]);
    this.service.updateTimeSheet(this.timesheets[idx]).subscribe(resp=>{
      if(resp == null){
        this.errorinfo = "login expiration";
      }
    })
    
    
  }
 


}
