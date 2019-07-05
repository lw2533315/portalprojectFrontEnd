import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Vacation } from 'src/app/admin/domain/vacation';

@Component({
  selector: 'app-view-emp-leavereport',
  templateUrl: './view-emp-leavereport.component.html',
  styleUrls: ['./view-emp-leavereport.component.css']
})
export class ViewEmpLeavereportComponent implements OnInit {
  vacations:any;
  errorinfo:string;
  constructor(private service:EmployeeService) { }

  ngOnInit() {
    this.service.findLeaves().subscribe(resp=>{
      console.log(resp);
      if(resp == null){
        this.errorinfo = "login invalidate";
      }else{
        console.log("test 1")
        this.vacations = resp;
        if(this.vacations[0] == null){
          this.errorinfo = "no leave recorder";
        }
      }
    });
  }

}
