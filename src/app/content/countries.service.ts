import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Country } from './Country';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private url = "https://restcountries.com/v3.1/all";

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.url);
  }


}
