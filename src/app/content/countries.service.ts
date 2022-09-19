import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Country } from './Country';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private url = "https://restcountries.com/v3.1";

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.url+"/all");
  }

  getCountryByName(name: string): Observable<Country> {
    return this.httpClient
      .get<Country[]>(this.url+"/name/"+name)
      .pipe(map(([res]) => res));
  }

  getCountriesByCodes(codes: string[]): Observable<Country[]> {
    return this.httpClient.get<Country[]>(
      this.url+"/alpha?codes="+codes.join(',')
    );
  }

}
