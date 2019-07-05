import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './auth/employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { InfomationComponent } from './infomation/infomation.component';


const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {
    path:"info", component:InfomationComponent
  },
  
  {
    path:"adminlogin", component:AdminLoginComponent
  },
  {
    path:"employeelogin", component:EmployeeLoginComponent
  },
  
  {
    path:"**" , component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
