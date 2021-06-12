import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.css']
})
export class AmericaComponent implements OnInit {

  title = 'Africa';
  banderas = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://restcountries.eu/rest/v2/region/americas")
      .subscribe(
        result => {
          this.banderas = result;
        },
        error => {
          console.log('problemas');
        }
      );
  }

}
