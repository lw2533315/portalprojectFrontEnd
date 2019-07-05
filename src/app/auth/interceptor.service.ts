import { Injectable } from '@angular/core';
import { HttpInterceptor , HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//实现HttpInterceptor
export class InterceptorService implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next:HttpHandler) {
    let authReq: any;
    //查看当前拦截到的httprequest 是哪
    console.log(req.url)
    //两个登录页面(employee and admin)
    if(req.url != "http://localhost:8100/auth/emplogin" ){
      //检测token是否存在
      console.log("interceptor")
      if(localStorage.getItem("token")){
        console.log("find token")
        //这里的token是一个json obj ，需要把token剥离出来
        const token = localStorage.getItem("token");
        console.log(JSON.parse(token).username);
        authReq = req.clone({setHeaders:{"jwtHeader":JSON.parse(token).token, "username":JSON.parse(token).username }})
        return next.handle(authReq);
      }

    }
    authReq = req.clone({setHeaders:{}});
    return next.handle(authReq);

  }

  constructor() { }
}
