import { Component } from '@angular/core';
import { InfopaisService } from './infopais.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Africa';
  banderas : any ;

  constructor(public  infopais:InfopaisService) { }
  ngOnInit() {
    this.infopais.getCountries().subscribe(data =>{
      this.banderas = data;
    });
  }
}
