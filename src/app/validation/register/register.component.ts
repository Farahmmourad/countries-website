import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  signUp() : void{
    this.authService.signUp(this.groupSignup.value).subscribe(
      () => { console.log(this.groupSignup.value)}
    );
  }

}
