import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasinfoService {

  vinculo: string = "https://restcountries.eu/rest/v2";

  constructor(private api: HttpClient) {}

  getCountries() {
    return this.api.get(`${this.vinculo}/all`);
  }

  getCountry(id) {
    return this.api.get(`${this.vinculo}/alpha?codes=${id}`);
  }

  getRegionCountries(region) {
    return this.api.get(`${this.vinculo}/region/${region}`);
  }
}
