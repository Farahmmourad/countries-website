import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { AuthService } from 'src/app/validation/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private service:AuthService,private transService: TranslocoService) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.onlogout();
  }

  translate(){
    if (this.transService.getActiveLang()==='en'){
      console.log(this.transService.getActiveLang());
      this.transService.setActiveLang('fr');
    }
    else if (this.transService.getActiveLang()==='fr'){
      this.transService.setActiveLang('en');
    }
  }
}
