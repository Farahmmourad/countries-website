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

  name: String = '';
  private sub: any;
  private sub1: any;
  countryn? : Country;
  country :Country[] = [];

  constructor(private route : ActivatedRoute, private location:Location,private countriesservice : CountriesService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']; 
   });

   this.countriesservice.getCountries()
   .subscribe(response => {
     this.country = response;
   });

   this.getCountry();
  //  console.log(this.location.getState());
  //  this.countryn = this.location.getState();
  }

  getCountry () : void{
    for ( let i of this.country){
      this.countryn = i;
      if( i.name.common === this.name)
        this.countryn= i;
      
    }

  }

}
