import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import {  loadCountries, filterByRegion, filterByName } from 'src/app/state/content/content.actions';
import { allCountries, allFiltered } from 'src/app/state/content/content.selectors';
import { CountriesService } from '../countries.service';
import { Country } from '../Country';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss']
})
export class ListCountriesComponent implements OnInit {
  country$ =this.store.select(allCountries);
  country : Country[] = [];
  selectedRegion : string= '';
  inputValue : string = '';
  newCountry : Country[] = [];
  unique : string[] = [];

  constructor( private store : Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
    
    this.country$.subscribe(
      data => {
        this.country=data;
        this.getDistinctRegion();
        console.log(data)
      }
    )
  }

  receiveInput ($event : any){
    this.inputValue = $event;
    this.filterByName();
  }

  getDistinctRegion(): void{
    this.unique = [...new Set(this.country.map(item => item.region))];
     
    
  }

  filterByName(): void{
    if(this.inputValue != ''){
      this.store.dispatch(filterByName({name: this.inputValue}));
      this.country$ = this.store.select(allFiltered);
     }
     else {
      this.country$ = this.store.select(allCountries)
     }

  }
  
  filterByRegion() : void{
    
    if(this.selectedRegion != ''){
    this.store.dispatch(filterByRegion({region: this.selectedRegion}));
    this.country$ = this.store.select(allFiltered)
    }
    else {
      this.country$ = this.store.select(allCountries)
    }

  }
 

}
