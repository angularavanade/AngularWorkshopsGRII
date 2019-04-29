import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../game';
import { FormGroup, FormControl } from '@angular/forms';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {

  @Input() editedGame: Game;
  @Output() refreshGames: EventEmitter<any> = new EventEmitter();

  public editForm: FormGroup;
  public newGame: Game;

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      artist: new FormControl(this.editedGame.artist || ''),
      designer: new FormControl(this.editedGame.designer || ''),
      feePerDay: new FormControl(this.editedGame.feePerDay || ''),
      imageUrl: new FormControl(this.editedGame.imageUrl || ''),
      name: new FormControl(this.editedGame.name || ''),
      minAge: new FormControl(this.editedGame.minAge || ''),
      minNumberOfPlayers: new FormControl(this.editedGame.minNumberOfPlayers || ''),
      maxNumberOfPlayers: new FormControl(this.editedGame.maxNumberOfPlayers || ''),
      minPlayingTime: new FormControl(this.editedGame.minPlayingTime || ''),
      maxPlayingTime: new FormControl(this.editedGame.maxPlayingTime || ''),
      rate: new FormControl(this.editedGame.rate || ''),
      year: new FormControl(this.editedGame.year || ''),
      publisher: new FormControl(this.editedGame.publisher || ''),
    });
  }

  onSubmit() {
    this.newGame = this.editForm.value;

    if (this.editedGame && this.objectEquality(this.newGame, this.editedGame)) {
      if (this.editedGame.id) {
        this.newGame.id = this.editedGame.id;
      }
      this.gamesService.editGame(this.newGame).subscribe();
      this.refreshGames.emit(this.newGame);
    }
  }

  objectEquality(object1: Object, object2: Object) {
    for (let i in object1) {
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
    return true;
  }

}
