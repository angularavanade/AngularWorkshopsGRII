import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GameFilterService } from '../services/games-filter.service';

@Component({
  selector: 'app-games-filter',
  templateUrl: './games-filter.component.html',
  styleUrls: ['./games-filter.component.scss']
})
export class GamesFilterComponent implements OnInit {

  gamesForms = new FormGroup({
    name: new FormControl(''),
    minNumberOfPlayers: new FormControl(''),
    maxNumberOfPlayers: new FormControl(''),
    minPlayingTime: new FormControl(''),
    maxPlayingTime: new FormControl(''),
    rate: new FormControl(''),
    year: new FormControl('')
  });

  constructor(private filterGamesService: GameFilterService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.filterGamesService.setFilter(this.gamesForms.value);
  }


}