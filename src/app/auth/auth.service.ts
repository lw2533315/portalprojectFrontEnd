import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  empLogin:string = "http://localhost:8100/auth"
   //headerr
  headers:any = new Headers( {  
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'  
  });

  constructor(private http: HttpClient) { }

  //employee and admin both user this
  emplogin(emp:any){
    return this.http.post(this.empLogin + "/emplogin", emp, {headers:this.headers , responseType:"text"} )
  }

}
