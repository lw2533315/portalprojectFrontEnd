import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './auth/employee-login/employee-login.component';

import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './auth/interceptor.service';
import { HomeComponent } from './home/home.component';
import { InfomationComponent } from './infomation/infomation.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    HomeComponent,
    InfomationComponent
  ],
  imports: [
    BrowserModule,  
    CoreModule,
    EmployeeModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    [{
      //multi:true 表示这个Http_Interceptors,可以对应多个userClass
      provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true 

    }]
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
