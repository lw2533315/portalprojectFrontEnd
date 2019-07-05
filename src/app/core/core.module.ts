import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { EmployeeRoutingModule } from '../employee/employee.routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,RouterModule, EmployeeRoutingModule
  ],
  exports:[ HeaderComponent, FooterComponent]
})
export class CoreModule { }
