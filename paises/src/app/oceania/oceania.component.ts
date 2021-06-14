import { Component, OnInit } from '@angular/core';
import { InfopaisService } from '../infopais.service';

@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['./oceania.component.css']
})
export class OceaniaComponent implements OnInit {

  title = 'Africa';
  banderas : any ;

  constructor(public  infopais:InfopaisService) { }
  ngOnInit() {
    this.infopais.getOceania().subscribe(data =>{
      this.banderas = data;
    });
  }
}
