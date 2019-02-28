import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://web-rental.azurewebsites.net/api/login';
  httpOptions = { headers: new HttpHeaders({ 'contentType': 'application/json' }) };
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap(user => {
        // console.log(user);
        localStorage.setItem('user', JSON.stringify(user))
      }
      )
    );
  }

  logout() {
    localStorage.removeItem('user');
  }

}