import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  public isLoading: boolean = false;

  public regions: Region[] =  ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor( private CountriesService: CountriesService ) {
  }

  searchByRegion( region: Region ): void {

    this.selectedRegion = region;

    this.isLoading = true;

    this.CountriesService.searchByRegion(region)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.region;
  }
}