import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  groupSignup = new FormGroup({
    Username : new FormControl(''),
    Password : new FormControl(''),
  }
  );
  constructor(private router:Router , private authService : AuthService) { }

  ngOnInit(): void {
  }

  validate(): void{
    // if (this.name.status==="VALID"){
    //   this.router.navigate(['../../register']);
    // }

    this.authService.login(this.groupSignup.value).subscribe(
      (x) => {
        console.log(x);
    }
    )

  }
}


