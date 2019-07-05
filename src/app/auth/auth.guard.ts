import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import {JwtHelperService} from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[]; 
   route: ActivatedRouteSnapshot;

  constructor(private auth: AuthService,    private jwt:JwtHelperService){}

  canActivate():boolean{
    return !this.jwt.isTokenExpired(localStorage.getItem('token'));  
  }


  
}
