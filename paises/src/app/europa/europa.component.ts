import { Component, OnInit } from '@angular/core';
import { InfopaisService } from '../infopais.service';
@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.css']
})
export class EuropaComponent implements OnInit {

  title = 'Africa';
  banderas : any ;

  constructor(public  infopais:InfopaisService) { }
  ngOnInit() {
    this.infopais.getEuropa().subscribe(data =>{
      this.banderas = data;
    });
  }
}

