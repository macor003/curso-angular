import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) { }

  searchByCapital(capital: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(capital)
      .subscribe(response => {
        this.countries = response;
        this.isLoading = false;
      });
    console.log({ capital });
  }

}
