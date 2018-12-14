import { Injectable } from '@angular/core';
import { GamesService } from './games.service';
import { Game } from '../game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameFilterService {

  gamesList: Game[];
  filteredGamesList: Game[];


  constructor(private gamesService: GamesService) { 

    this.gamesService.getGames()
    .subscribe(
      (gamesList: Game[]) => this.filteredGamesList = this.gamesList = gamesList
    );
  }

  search(phrase:string) {
    this.filteredGamesList = this.gamesList.filter(x => x.name.toLowerCase().includes(phrase.toLowerCase()));
    console.log(phrase);
  }

  getFilteredGames(): Observable <Game[]> {
    return this.filteredGamesList
  }

}
