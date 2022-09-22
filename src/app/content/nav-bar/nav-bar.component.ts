import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/validation/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private service:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.onlogout();
  }
}
