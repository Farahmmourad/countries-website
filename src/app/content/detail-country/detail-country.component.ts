import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../Country';
import { Location } from '@angular/common';
import { CountriesService } from '../countries.service';

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

  constructor(private route : ActivatedRoute,private countriesservice : CountriesService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']; 
   });

    this.countriesservice.getCountryByName(this.name)
   .subscribe(response => {
     this.countryn = response;
     console.log(this.countryn);
     this.getCountry();
   });

  }

  getCountry () : void{
    this.countriesservice.getCountriesByCodes(this.countryn.borders)
    .subscribe(response => {
      this.country = response;
      console.log(response)
    });

  }

}
