import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'countries-by-region-page',
  standalone: false,

  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByRegion(region: string): void {
    this.countriesService.searchRegion(region)
      .subscribe(response => {
        this.countries = response;
      });
    console.log({ capital: region });
  }
}
