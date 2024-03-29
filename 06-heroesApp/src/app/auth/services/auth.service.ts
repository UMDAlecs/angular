import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of, map, catchError } from 'rxjs';

import { environments } from 'src/environments/environments';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(
    private http: HttpClient,
  ) { }

  get currentUser(): User | undefined {
    if ( !this.user ) return undefined;

    return structuredClone(this.user);
  }

  login(user: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap( user => this.user = user),
        tap( user => localStorage.setItem('token', 'asdasdasd.fasdfasda.asgafwr' ))
      );
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
  }

  checkAutenticationStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if ( !token ) return of(false);

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap( user => this.user = user ),
        map( user => !!user),
        catchError( error => of(false)),
      );
  }
}
