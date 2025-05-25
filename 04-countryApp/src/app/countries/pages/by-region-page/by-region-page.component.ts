import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  standalone: false,

  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public selectedRegion?: Region;

  public isLoading: boolean = false;

  constructor(private readonly countriesService: CountriesService) { }

  searchByRegion(region: Region): void {

    this.selectedRegion = region;

    this.isLoading = true;
    this.countriesService.searchRegion(region)
      .subscribe(response => {
        this.countries = response;
        this.isLoading = false;
      });
    console.log({ capital: region });
  }

}
