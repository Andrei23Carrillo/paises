import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountriesInterface } from './CountriesInterface';
@Injectable({
  providedIn: 'root'
})
export class InfopaisService {

  vinculo: string = "https://restcountries.eu/rest/v2";

  constructor(private api: HttpClient) {}

  getAfrica(){
    return this.api.get(`${this.vinculo}/region/africa`)
  }
  getAmerica(){
    return this.api.get(`${this.vinculo}/region/americas`)
  }
  getAsia(){
    return this.api.get(`${this.vinculo}/region/asia`)
  }
  getEuropa(){
    return this.api.get(`${this.vinculo}/region/europe`)
  }
  getOceania(){
    return this.api.get(`${this.vinculo}/region/oceania`)
  }
  getCountries(){
    return this.api.get(`${this.vinculo}/all`)
  }  
}
