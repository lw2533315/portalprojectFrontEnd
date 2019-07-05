import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Salary } from 'src/app/admin/domain/salary';

@Component({
  selector: 'app-view-empsalaryreport',
  templateUrl: './view-empsalaryreport.component.html',
  styleUrls: ['./view-empsalaryreport.component.css']
})
export class ViewEmpsalaryreportComponent implements OnInit {
  errorinfo:string;
  salary = new Salary();


  constructor(private service:EmployeeService) { }

  ngOnInit() {

    this.service.getSalary().subscribe(resp=>{
      if(resp == null){
        this.errorinfo = "login expiration";
      }else{
        
        if(resp.payAmount == 0){
          this.errorinfo="this guy do not add in salary table";
        }else{
          this.salary = resp;
        }
      }
    })
  }

}
