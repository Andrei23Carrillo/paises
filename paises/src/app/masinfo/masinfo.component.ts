import { Component, OnInit} from '@angular/core';
import { InfopaisService } from '../infopais.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.component.html',
  styleUrls: ['./masinfo.component.css']
})
export class MasinfoComponent implements OnInit {


  constructor(private infoPais:InfopaisService,
    private route: ActivatedRoute, private router: Router) { }

  // @HostListener('click', ['event'])


  ngOnInit() {
  }
}

