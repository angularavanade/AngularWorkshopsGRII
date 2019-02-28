import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Output() edit: EventEmitter<any> = new EventEmitter();

  @Input() game: Game;
  constructor() { }
  
  ngOnInit() {
  }

  editGame() {
    this.edit.emit(this.game);
  }

}
