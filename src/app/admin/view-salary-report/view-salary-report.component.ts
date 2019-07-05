import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Salary } from '../domain/salary';

@Component({
  selector: 'app-view-salary-report',
  templateUrl: './view-salary-report.component.html',
  styleUrls: ['./view-salary-report.component.css']
})
export class ViewSalaryReportComponent implements OnInit {
  salaries:any
  errorinfo:string;

  constructor(private service: AdminService) {

   }

  ngOnInit() {
    this.service.findAllSalaries().subscribe(resp=>{
      console.log(resp);
      if(resp == null){
        this.errorinfo = "login expiration";
      }else if(resp[0].empId == null){
        this.errorinfo = "fail to call db"
      }else{
        this.salaries = resp;
        console.log(this.salaries)
      }
    });
  }

}
