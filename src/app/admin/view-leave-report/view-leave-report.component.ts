import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-leave-report',
  templateUrl: './view-leave-report.component.html',
  styleUrls: ['./view-leave-report.component.css']
})
export class ViewLeaveReportComponent implements OnInit {
  vacations:any;
  errorinfo:string;

  constructor(private service: AdminService) { }

  ngOnInit() {
    console.log("call admin service")
    this.service.findAllLeaves().subscribe(resp=>{
      console.log(resp);
      if(resp == null){
        this.errorinfo = "login expiration";
      }else if(resp[0].empId ==null){
        this.errorinfo = "call db fail";
      }else{
        this.vacations = resp;
      }

    })
  }

}
