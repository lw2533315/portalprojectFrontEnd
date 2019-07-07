import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmpsalaryreportComponent } from './view-empsalaryreport/view-empsalaryreport.component';
import { ViewEmpLeavereportComponent } from './view-emp-leavereport/view-emp-leavereport.component';
import { ViewTimesheetReportComponent } from './view-timesheet-report/view-timesheet-report.component';
import { UpdateTimesheetComponent } from './update-timesheet/update-timesheet.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { EmployeeRoutingModule } from './employee.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmailtrieveComponent } from './emailtrieve/emailtrieve.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component'

@NgModule({
  declarations: [ViewEmpsalaryreportComponent, ViewEmpLeavereportComponent, ViewTimesheetReportComponent, UpdateTimesheetComponent, ApplyLeaveComponent, EmailtrieveComponent, EmailtrieveComponent, UpdatepasswordComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule ,
    HttpClientModule,
    FormsModule
  ],
  
  exports: [ViewEmpLeavereportComponent, ViewEmpsalaryreportComponent, ViewTimesheetReportComponent, UpdateTimesheetComponent, ApplyLeaveComponent]

})
export class EmployeeModule { }
