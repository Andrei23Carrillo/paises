import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['./oceania.component.css']
})
export class OceaniaComponent implements OnInit {
  title = 'Africa';
  banderas = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://restcountries.eu/rest/v2/region/oceania")
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
