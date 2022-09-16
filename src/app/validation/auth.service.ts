import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from './UserInfo';
import { UserAuth } from './UserAuth';
import { LoginToken } from './LoginToken';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://192.168.1.187:5005/api";
  private userUrl = this.url + "/User";

  constructor(private httpClient: HttpClient) { }

  login(Auth : UserAuth) : Observable<LoginToken> {
    return this.httpClient.post<LoginToken>(this.userUrl+"/Login()", Auth);
  }

  logout() : Observable<any> {
    return this.httpClient.get(this.userUrl+"/Logout()");
  };
  signUp(credentials: UserInfo) : Observable<any> {
    return this.httpClient.post(this.userUrl+"/SignUp()", credentials);
  }

  decodeToken(encodedString : string) : string {
    return atob(encodedString);
  }

}
