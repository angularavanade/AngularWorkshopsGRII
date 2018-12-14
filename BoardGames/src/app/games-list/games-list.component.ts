import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../game';
import { GameFilterService } from '../services/games-filter.service';


@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  public gamesList: Game[];
  public filteredGamesList: Game[];

  constructor(private gamesFilterService: GameFilterService) { }

  ngOnInit() {
  this.gamesFilterService.getGames()
    .subscribe(
      (gamesList: Game[]) => this.filteredGamesList = this.gamesList = gamesList
    );
  }

  // search(phrase:string) {
  //   this.filteredGamesList = this.gamesList.filter(x => x.name.toLowerCase().includes(phrase.toLowerCase()));
  //   console.log(phrase);
  // }

}
