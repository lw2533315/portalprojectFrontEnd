import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewLeaveReportComponent } from './view-leave-report/view-leave-report.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { ViewTimesheetReportComponent } from './view-timesheet-report/view-timesheet-report.component';
import { AddTimesheetComponent } from './add-timesheet/add-timesheet.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmpReportComponent } from './view-emp-report/view-emp-report.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { ViewSalaryReportComponent } from './view-salary-report/view-salary-report.component';
import { AdminRoutingModule } from './admin.routing.modules';

@NgModule({
  declarations: [ViewLeaveReportComponent, AddLeaveComponent, ViewTimesheetReportComponent, AddTimesheetComponent, AddEmployeeComponent, ViewEmpReportComponent, AddSalaryComponent, ViewSalaryReportComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[AddEmployeeComponent, AddTimesheetComponent, ViewTimesheetReportComponent, AddLeaveComponent, ViewLeaveReportComponent]
})
export class AdminModule { }
