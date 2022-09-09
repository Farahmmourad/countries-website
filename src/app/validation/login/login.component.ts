import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name =new FormControl('',[Validators.required]);
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  validate(): void{
    if (this.name.status==="VALID"){
      this.router.navigate(['../../register']);
    }
  }
}
