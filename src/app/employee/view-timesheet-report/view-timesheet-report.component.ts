import { Component, OnInit } from '@angular/core';
import {Timesheet} from 'src/app/employee/model/timesheet'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-timesheet-report',
  templateUrl: './view-timesheet-report.component.html',
  styleUrls: ['./view-timesheet-report.component.css']
})
export class ViewTimesheetReportComponent implements OnInit {
  timeSheet:Timesheet;
  errorinfo:string;
  timesheets: any;


  constructor(private service:EmployeeService) { }

  ngOnInit() {
    console.log("test timesheet")
    
    //get employee timesheet info from backend
    this.service.getTimesheet().subscribe(resp=>{
      if(resp == null){
        this.errorinfo = "login expiration or db error";
      }else {
        this.timesheets = resp;
        console.log(this.timesheets);
        //backend return a empty list, and timesheets cannot be user length = 0 to check
        //so just use the method to find the situation
        if(this.timesheets[0].employeeCode == null){

          this.errorinfo = "no time sheet for the user"
        }else{
        this.errorinfo = "";
        console.log(this.timesheets);
        }
      }
    })
    
  }

}
