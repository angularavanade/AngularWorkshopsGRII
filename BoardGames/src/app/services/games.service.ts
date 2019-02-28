import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  
  apiUrl = 'https://web-rental.azurewebsites.net/api';
  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<Object> {
    return this.httpClient.get(this.apiUrl + '/boardGames');
  }

  editGame(game: Game): Observable<any> {
    return this.httpClient.put(this.apiUrl + '/boardGames', game);                                                                                     
  }



}
