import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/Country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: {
      term: '',
      countries: []
    },
    byCountry: {
      term: '',
      countries: []
    },
    byRegion: {
      region: '',
      countries: []
    }
  }

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }

  loadLocalStorage() {
    if ( !localStorage.getItem('cacheStore') ) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  getCountriesRequest(url: string) {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        delay(1000)
      );
  }

  searchByCapital(term: string): Observable<Country[]> {
    const query = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(query)
      .pipe(
        tap( countries => {
          this.cacheStore.byCapital = { term , countries };
          this.saveLocalStorage()
        })
      );
  }
  searchByCountry(term: string): Observable<Country[]> {
    const query = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(query)
    .pipe(
      tap( countries => {
        this.cacheStore.byCountry = { term , countries };
        this.saveLocalStorage()
      })
    );
  }
  searchByRegion(region: Region): Observable<Country[]> {
    const query = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(query)
    .pipe(
      tap( countries => {
        this.cacheStore.byRegion = { region , countries };
        this.saveLocalStorage()
      })
    );
  }

  searchByAlphaCode(term: string): Observable<Country | null> {
    const query = `${this.apiUrl}/alpha/${term}`;

    return this.http.get<Country[]>(query)
      .pipe(
        map(
          countries => countries.length > 0 ? countries[0] : null
        ),
        catchError(() => of(null))
      );
  }
}
