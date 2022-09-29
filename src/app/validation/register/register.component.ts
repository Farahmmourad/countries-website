import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  groupSignup = new FormGroup({
    Firstname : new FormControl('', Validators.required),
    Lastname : new FormControl('', Validators.required),
    Email : new FormControl('', Validators.email),
    Password : new FormControl('', Validators.required),
    RoleName :  new FormControl('',Validators.required),
  }
  );



  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  signUp() : void{
    if (this.groupSignup.valid){
    if (this.groupSignup.value.RoleName === 'Admin'){
      this.authService.createAdmin(this.groupSignup.value).subscribe(
        () => { 
          console.log(this.groupSignup.value);
          this.router.navigate(['/login'])
        }
      );
    }
    else {
    this.authService.signUp(this.groupSignup.value).subscribe(
      () => {
        console.log(this.groupSignup.value);
        this.router.navigate(['/login'])}
    );
    }
  }
  }

}
