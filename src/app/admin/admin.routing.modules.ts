import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddEmployeeComponent} from '../admin/add-employee/add-employee.component';
import {AddLeaveComponent} from '../admin/add-leave/add-leave.component';
import { AddSalaryComponent } from '../admin/add-salary/add-salary.component';
import { AddTimesheetComponent } from '../admin/add-timesheet/add-timesheet.component';
import { ViewEmpReportComponent } from '../admin/view-emp-report/view-emp-report.component';
import { ViewLeaveReportComponent } from '../admin/view-leave-report/view-leave-report.component';
import { ViewSalaryReportComponent } from '../admin/view-salary-report/view-salary-report.component';
import { ViewTimesheetReportComponent} from '../admin/view-timesheet-report/view-timesheet-report.component';


const routes: Routes = [
    {
        path:"addemployee", component:AddEmployeeComponent
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