import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from './UserInfo';
import { UserAuth } from './UserAuth';
import { LoginToken } from './LoginToken';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://192.168.1.187:5005/api";
  private userUrl = this.url + "/User";
  parts? :string[] = [];
  jwtHelper = new JwtHelperService();


  constructor(private httpClient: HttpClient, private router: Router) { }

  login(Auth : UserAuth) : Observable<LoginToken> {
    return this.httpClient.post<LoginToken>(this.userUrl+"/Login()", Auth);
  }

  logout(token : string, refreshtoken : string) : Observable<any> {
    return this.httpClient.post(this.userUrl+"/Logout()",{
      Token : token,
      RefreshToken : refreshtoken
    });
  };
  signUp(credentials: UserInfo) : Observable<any> {
    return this.httpClient.post(this.userUrl+"/SignUp()", credentials);
  }

  createAdmin (credentials: UserInfo) : Observable<any> {
    return this.httpClient.post(this.userUrl+"/CreateAdminUser()", credentials);
  }

  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }

  getToken(){
    return localStorage.getItem('token') || '';
  }

  getRefreshToken(){
    console.log(localStorage.getItem('refreshtoken'));
    return localStorage.getItem('refreshtoken') || '';
  }

  decodeToken() {
    var logintoken = this.getToken();
    var extractedtoken = logintoken.split('.')[1];
    var atobtoken = atob(extractedtoken);
    var finaldata = JSON.parse(atobtoken);
    console.log(finaldata.realm_access.roles[2]);
    var role =finaldata.realm_access.roles[2];
    if (role === 'Admin'){
      return true;
    }
    else{
      return false;
    }
  }

  getAuthStatus () : boolean {
    if (this.jwtHelper.isTokenExpired(localStorage.getItem('token')!)) {
      return false; 
    } else {
      return true;
    }
  }

  refreshToken() {
    return this.httpClient.post<LoginToken>(this.userUrl + '/RefreshToken()', 
    {RefreshToken: this.getRefreshToken()});
  }

  saveToken(token : string, refreshtoken : string){
    localStorage.removeItem('token');
    localStorage.removeItem('refreshtoken');
    localStorage.setItem('token', token);
    localStorage.setItem('refreshtoken', refreshtoken)
  }

  onlogout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
