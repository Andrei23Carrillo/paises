import { Component, OnInit } from '@angular/core';
import { InfopaisService } from '../infopais.service';
@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {


  title = 'Africa';
  banderas : any ;

  constructor(public  infopais:InfopaisService) { }
  ngOnInit() {
    this.infopais.getAsia().subscribe(data =>{
      this.banderas = data;
    });
  }
}

