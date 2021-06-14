import { Component, OnInit } from '@angular/core';
import { InfopaisService } from '../infopais.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  
    title = 'Africa';
    banderas : any ;
  
    constructor(public  infopais:InfopaisService) { }
    ngOnInit() {
      this.infopais.getCountries().subscribe(data =>{
        this.banderas = data;
      });
    }
  
}
  