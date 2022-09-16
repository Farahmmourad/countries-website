import { Injectable } from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    const token = localStorage.getItem('token');
    if (token){
      req = req.clone({
        setHeaders: {
            'Authorization': "Bearer " + token,
        }
      })
    }
    
    return next.handle(req);
  }
  constructor() { }
}
