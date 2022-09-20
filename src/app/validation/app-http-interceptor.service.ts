// import { Injectable } from '@angular/core';
// import {HttpHandler, HttpRequest, HttpInterceptor,HttpEvent} from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { AuthService } from './auth.service';
// import { catchError, switchMap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AppHttpInterceptorService implements HttpInterceptor{

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

//     const token = this.service.getToken();
//     if(this.service.getAuthStatus()){
//     if (token){
//       req = this.AddTokenHeader(req, token)
//     }
//   }

//     return next.handle(req).pipe(
//       catchError (
//         errordata => {
//           if(errordata.status === 401){
//             //this.service.onlogout();
//             return this.HandleRefreshToken(req,next);
//           }
//           return throwError(errordata)
//         }
//       )
//     )
//   }

//   AddTokenHeader(req: HttpRequest<any>,token : any){
//     return req.clone({
//       setHeaders: {
//           'Authorization': "Bearer " + token,
//       }
//     })
//   }

//   HandleRefreshToken(req: HttpRequest<any>, next: HttpHandler){
//     return this.service.refreshToken().pipe(
//       switchMap(
//         (data) =>{
//           this.service.saveToken(data);
//           return next.handle(this.AddTokenHeader(req,data.token)) 
//         }
//       )
//     )
//   }

//   constructor(private service: AuthService) { }
// }
