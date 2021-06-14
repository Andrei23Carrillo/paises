import { Component, OnInit, OnDestroy } from '@angular/core';
import { InfopaisService } from '../infopais.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.component.html',
  styleUrls: ['./masinfo.component.css']
})
export class MasinfoComponent implements OnInit {

  
  pais: any;
  loading: boolean = false;
  component: any;

  constructor(private api: InfopaisService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loading = true;
    this.getCountry();
  }

  ngOnDestroy() {
    this.component.unsubscribe();
  }

  getCountry() {
    const routeParams = this.route.snapshot.params;
    this.component = this.api.getCountry(routeParams.id).subscribe(res => {
      this.pais = res[0];
      this.loading = false;
    });
  }

}
