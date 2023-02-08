import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { Observable, of } from 'rxjs';
import { CountryDetail } from '../interfaces/country-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl : string   = 'https://restcountries.com/v3.1'
  private _regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regions() {
    return [ ...this._regions ];
  }

  constructor(
    private http: HttpClient
  ) { }

  getCountriesByRegion( region: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/region/${region}?fields=cca3,name`)
  }

  getCountryByCode( code: string ): Observable<CountryDetail[]> {
    if( !code ) return of()
    return this.http.get<CountryDetail[]>(`${this.baseUrl}/alpha/${code}`)
  }

}
