import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Country } from '../Country';
import { Location } from '@angular/common';
import { CountriesService } from '../countries.service';
import { TranslocoService } from '@ngneat/transloco';
import { AuthService } from 'src/app/validation/auth.service';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.scss']
})
export class DetailCountryComponent implements OnInit {

  name: string = '';
  private sub: any;
  private sub1: any;
  countryn! : Country;
  country :Country[] = [];

  constructor(private route : ActivatedRoute,private countriesservice : CountriesService,private service : AuthService) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params:ParamMap) => {
      this.name = params.get('name')!; 
      this.countriesservice.getCountryByName(this.name)
      .subscribe(response => {
        this.countryn = response;
        console.log(this.countryn);
        this.getCountry();
      });
   });

 

  }

  getCountry () : void{
    this.countriesservice.getCountriesByCodes(this.countryn.borders)
    .subscribe(response => {
      this.country = response;
      console.log(response)
    });

  }

  checkRole(){
    return this.service.decodeToken()
  }


}
