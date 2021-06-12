import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})
export class AfricaComponent implements OnInit {

  title = 'Africa';
  banderas = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://restcountries.eu/rest/v2/region/africa")
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
