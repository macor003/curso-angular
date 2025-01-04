import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dgz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})
export class MainPageComponent {

  constructor(public dbzService : DbzService){}

}
