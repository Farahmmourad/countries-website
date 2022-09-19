import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginToken } from '../LoginToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  groupSignup = new FormGroup({
    Username : new FormControl('', Validators.required),
    Password : new FormControl('', Validators.required),
  }
  );
  parts :string[] = [];
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ =this.isLoggedIn.asObservable();

  constructor(private router:Router , private authService : AuthService) { }

  ngOnInit(): void {
  }

  validate(): void{

    // this.authService.login(this.groupSignup.value).subscribe(
    //   (x: LoginToken) => {
    //     console.log(x);
    //     localStorage.setItem('token', x.Login.AccessToken);
    //     this.isLoggedIn.next(true);
    //     this.parts  = x.Login.AccessToken.split('.');
    //     console.log(this.authService.decodeToken(this.parts[1]));
        this.router.navigate(['../../content']);
    // }
    // )

  }
}


