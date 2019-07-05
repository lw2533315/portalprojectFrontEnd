import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {AddLeaveComponent} from './add-leave/add-leave.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { AddTimesheetComponent } from './add-timesheet/add-timesheet.component';
import { ViewEmpReportComponent } from './view-emp-report/view-emp-report.component';
import { ViewLeaveReportComponent } from './view-leave-report/view-leave-report.component';
import { ViewSalaryReportComponent } from './view-salary-report/view-salary-report.component';
import { ViewTimesheetReportComponent} from './view-timesheet-report/view-timesheet-report.component';
import {AuthGuard} from '../auth/auth.guard';

const routes: Routes = [
    {
        path:"addemployee", component:AddEmployeeComponent,canActivate:[AuthGuard]
      },
      {
        path:"addleave", component:AddLeaveComponent
      },
      {
        path:"addsalary", component:AddSalaryComponent
      },
      {
        path:"addtimesheet", component:AddTimesheetComponent
      },
      {
        path:"viewempreport", component:ViewEmpReportComponent
      },
      {
        path:"viewleavereport", component:ViewLeaveReportComponent
      },
      {
        path:"viewsalaryreport", component:ViewSalaryReportComponent
      },
      {
        path:"adminviewtimesheetreport", component:ViewTimesheetReportComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }