import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InfopaisService {

  vinculo: string = "https://restcountries.eu/rest/v2";

  constructor(private api: HttpClient) {}

  getCountries() {
    return this.api.get(`${this.vinculo}/all`);
  }

  getCountry(id) {
    return this.api.get(`${this.vinculo}/alpha?codes=${id}`);
  }
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
}
