import { Injectable } from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor,HttpEvent} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, switchMap } from 'rxjs/operators';
import { LoginToken } from './LoginToken';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    const token = this.service.getToken();
    if(this.service.getAuthStatus()){
    if (token){
      req = this.AddTokenHeader(req, token)
    }
  }

    return next.handle(req).pipe(
      catchError (
        errordata => {
          if(errordata.status === 401){
            return this.HandleRefreshToken(req,next);
          }
          return throwError(errordata)
        }
      )
    )
  }

  AddTokenHeader(req: HttpRequest<any>,token : any){
    return req.clone({
      setHeaders: {
          'Authorization': "Bearer " + token,
      }
    })
  }

  HandleRefreshToken(req: HttpRequest<any>, next: HttpHandler){
    return this.service.refreshToken().pipe(
      switchMap(
        (data: LoginToken) =>{
            
          this.service.saveToken(data.Login.AccessToken,data.Login.RefreshToken);
          return next.handle(this.AddTokenHeader(req,data.Login.AccessToken)) 
        }
      ),
      catchError(
        errordata =>{
            this.service.logout(this.service.getToken(),this.service.getRefreshToken());
            return throwError(errordata)
        }
      )
    )
  }

  constructor(private service: AuthService) { }
}
