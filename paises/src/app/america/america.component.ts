import { Component, OnInit } from '@angular/core';
import { InfopaisService } from '../infopais.service';
@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.css']
})
export class AmericaComponent implements OnInit {

  title = 'Africa';
  banderas : any ;

  constructor(public  infopais:InfopaisService) { }
  ngOnInit() {
    this.infopais.getAmerica().subscribe(data =>{
      this.banderas = data;
    });
  }
}
