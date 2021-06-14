import { Component, OnInit } from '@angular/core';
import { InfopaisService } from '../infopais.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})
export class AfricaComponent implements OnInit {

  title = 'Africa';
  banderas : any ;

  constructor(public  infopais:InfopaisService) { }
  ngOnInit() {
    this.infopais.getAfrica().subscribe(data =>{
      this.banderas = data;
    });
  }
}
