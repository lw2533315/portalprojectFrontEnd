import { Component, OnInit } from '@angular/core';
import { Vacation } from 'src/app/admin/domain/vacation';
import { Employee } from 'src/app/admin/domain/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  vacation = new Vacation();
  errorinfo:string;
  


  constructor(private service: EmployeeService) { }

  ngOnInit() {
    
  }

  addLeave(){
    this.vacation.status = "pending";
    this.service.addLeave(this.vacation).subscribe(resp=>{
      console.log(resp);
      if(resp == null){
        this.errorinfo = "login expiration"
      }});
  }

}
