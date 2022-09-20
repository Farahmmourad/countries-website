import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation-page',
  templateUrl: './validation-page.component.html',
  styleUrls: ['./validation-page.component.scss']
})
export class ValidationPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  getRoute() : string {
    return this.router.url;
  }

}
