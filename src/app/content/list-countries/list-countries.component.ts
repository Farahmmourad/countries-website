import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import {  loadCountries } from 'src/app/state/content/content.actions';
import { allCountries } from 'src/app/state/content/content.selectors';
import { CountriesService } from '../countries.service';
import { Country } from '../Country';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss']
})
export class ListCountriesComponent implements OnInit {
  public country$ =this.store.select(state => state.countries);
  selectedRegion : String= '';
  inputValue : string = '';
  newCountry : Country[] = [];

  constructor(private service: CountriesService, private store : Store<{countries : Country[]}>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
    
    console.log(this.country$)
  }

  receiveInput ($event : any){
    this.inputValue = $event;
  }

  // getDistinctRegion(): String[]{
  //   const unique = [...new Set(this.country$.map(item => item.region))];
     
  //   return  unique;
  // }

  // filterByName(): Country[]{
  //   if(this.selectedRegion != '')
  //   return this.country.filter(n => { return n.name.common === this.inputValue})

  //   return this.country;

  // }
  
  // filterByRegion() : Country[]{
  //   this.newCountry = this.country;
  //   if(this.selectedRegion != '')
  //    this.newCountry=this.country.filter(n => { return n.region === this.selectedRegion})

  //    if(this.inputValue != ''){

  //     this.newCountry=this.newCountry.filter(n => { 
  //       if (n.name.common.includes(this.inputValue)) 
  //       return n.name.common;
  //     return null;
  //   })
  //    }

  //   return this.newCountry;

  // }
 

}
