import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-timesheet-report',
  templateUrl: './view-timesheet-report.component.html',
  styleUrls: ['./view-timesheet-report.component.css']
})
export class ViewTimesheetReportComponent implements OnInit {
  timesheets:any;
  errorinfo:string;

  constructor(private service:AdminService) { }

  ngOnInit() {
    this.service.findAllTimesheets().subscribe(resp=>{
      console.log(resp);
      if(resp == null){
        this.errorinfo="login expiration or fail to touch db";
      }else{
        this.timesheets = resp;
      }
    });
  }

}
