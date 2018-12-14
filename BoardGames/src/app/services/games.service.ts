import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  
  apiUrl = 'https://webrental20181129012527.azurewebsites.net/api';
  constructor(private httpClient: HttpClient) { }

  getGames() {
    return this.httpClient.get(this.apiUrl + '/boardgames');
  }



}
