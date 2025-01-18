import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  searchByCapital(capital: string): void {
    console.log('Buscar por capital:');
    console.log({capital});
  }

}
