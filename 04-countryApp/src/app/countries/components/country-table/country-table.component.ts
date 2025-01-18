import { Component, Input } from '@angular/core';

@Component({
  selector: 'countries-table',
  standalone: false,
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {

  @Input()
  public countries: any[] = [];

}
