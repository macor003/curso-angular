import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  standalone: false,

  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) { }

  searchByCountry(country: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(country)
      .subscribe(response => {
        this.countries = response;
        this.isLoading = false;
      });
    console.log({ capital: country });
  }

}
