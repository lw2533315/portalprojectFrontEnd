import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { AdminService } from '../admin.service';
import {Timesheet} from '../../employee/model/timesheet'

@Component({
  selector: 'app-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.css']
})
export class AddTimesheetComponent implements OnInit{
  timesheet = new Timesheet();
  employees:any;
  projects:any;
  errorinfo:string = "";
  empIdx:number;
  projIdx:number;
  
  constructor(private service:AdminService) { }

  //before add timesheet need get all possible employees and projects
  ngOnInit() {
    this.service.findAllEmployees().subscribe((resp)=>{
      this.employees = resp;
      console.log(this.employees);
    });
    this.service.findAllProjects().subscribe((resp) =>{
      this.projects = resp;
      console.log(this.projects);
    })
  }
  
  //insert a new employee data to database
  //call admin server method addTimesheet
  //check the back value
  addTimesheet() {
    console.log("empidx " + this.empIdx);
    console.log("projindex " + this.projIdx)
    this.timesheet.employeeCode = this.employees[this.empIdx].id;
    this.timesheet.employeeName = this.employees[this.empIdx].firstName + " " + this.employees[this.empIdx].lastName;
    this.timesheet.projectCode = this.projects[this.projIdx].projId;
    this.timesheet.projName = this.projects[this.projIdx].projName;
    this.service.addTimesheet(this.timesheet).subscribe(back=>
      {
        if(back=="error" || back=="false"){
          this.errorinfo = "log in expiration";
        }
      });
  }

  

  

}
