import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { UpdateTimesheetComponent } from './update-timesheet/update-timesheet.component';
import { ViewEmpLeavereportComponent } from './view-emp-leavereport/view-emp-leavereport.component';
import { ViewEmpsalaryreportComponent } from './view-empsalaryreport/view-empsalaryreport.component';
import { ViewTimesheetReportComponent } from './view-timesheet-report/view-timesheet-report.component';

const routes: Routes = [

  
  {
    path:"applyleave", component:ApplyLeaveComponent
  },
  {
    path:"updatetimesheet", component:UpdateTimesheetComponent
  },
  {
    path:"viewempleavereport", component:ViewEmpLeavereportComponent
  },
  {
    path:"viewempsalaryreport", component:ViewEmpsalaryreportComponent
  },
  {
    path:"viewtimesheetreport", component:ViewTimesheetReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }