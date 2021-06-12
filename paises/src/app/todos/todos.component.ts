import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  title = 'Todos los paises';
  banderas = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://restcountries.eu/rest/v2/all")
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