import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Employee } from '../domain/employee';

@Component({
  selector: 'app-view-emp-report',
  templateUrl: './view-emp-report.component.html',
  styleUrls: ['./view-emp-report.component.css']
})
export class ViewEmpReportComponent implements OnInit {

  employees: any;

  constructor(private adminService:AdminService ) { }

  ngOnInit() {
    this.adminService.findAllEmployees().subscribe(data => {
      this.employees = data;
    })

  }

}
