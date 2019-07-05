import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Vacation } from '../domain/Vacation';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {
  vacation = new Vacation();
  vacations:any;
  errorinfo:string;
  empIdx:string;
  status:string[];

  statusSelected:string[];


  constructor(private service: AdminService) {
    this.status = [ "pending","approval", "decline"];
    
   }

  ngOnInit() {
    // this.service.findAllEmployees().subscribe((resp)=>{
    //   this.employees = resp;
    //   if(resp == null){
    //     this.errorinfo = "login invalid";
    //   }

    //   console.log(this.employees);
    // });
    this.service.findPendingLeave().subscribe(resp=>{
      
      if(resp == null){
        this.errorinfo = "login invalide"
      }else{
        
        this.vacations = resp;
        console.log(this.vacations);
        
    }});
  }

  permitLeave(){
    this.service.permitLeave(this.vacations).subscribe();
  
  }

}
