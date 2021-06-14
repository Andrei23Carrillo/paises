import { Component, OnInit } from '@angular/core';
import { InfopaisService } from '../infopais.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  title = 'todos';
  banderas : any ;
  vinculo = null;

  constructor(public  infopais:InfopaisService) { }
  ngOnInit() {

    this.getCountries();
  }
  getCountries() {
    this.infopais.getCountries().subscribe(res => {
      this.banderas = res;
    });
  }
}