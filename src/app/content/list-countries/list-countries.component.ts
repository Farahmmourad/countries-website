import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Observable } from 'rxjs';
import { distinct , map} from 'rxjs/operators';
import { Country } from '../Country';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss']
})
export class ListCountriesComponent implements OnInit {
  country: Country[] = [];
  

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.service.getCountries()
        .subscribe(response => {
          this.country = response;
        });
  }

  getDistinctRegion(): String[]{
    const unique = [...new Set(this.country.map(item => item.region))];
    // this.service.getCountries().pipe(mergeMap(d => d.region),distinct(({ count }) => count.region)).subscribe() 
    return  unique;
  }
  
  filterByRegion(r:String) : Country[]{
    return this.country.filter(n => { return n.region === r})
  }

}
