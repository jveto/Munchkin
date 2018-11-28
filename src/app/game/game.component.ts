import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) { }
  players = this._httpService.getData();
  ngOnInit() {
    console.log('in game');
    console.log(this.players);
  }

  plusGear(id) {
    console.log('plus gear!');
    console.log(id);
    console.log(this.players[id]['gear']);
    this.players[id]['gear'] += 1;
    this.players[id]['power'] = this.players[id]['gear'] + this.players[id]['level'];
  }
  minusGear(id) {
    console.log('minus gear!');
    if (this.players[id]['gear'] == 0) {
      console.log('cant subtract anymore!');
      return;
    }
    this.players[id]['gear'] -= 1;
    this.players[id]['power'] = this.players[id]['gear'] + this.players[id]['level'];
  }
  plusLevel(id) {
    console.log('plus level!');
    if (this.players[id]['level'] == 10) {
      console.log('max level!');
      return;
    }
    this.players[id]['level'] += 1;
    this.players[id]['power'] = this.players[id]['gear'] + this.players[id]['level'];
  }

  minusLevel(id) {
    console.log('minus level!');
    if (this.players[id]['level'] == 0) {
      console.log('cant subtract anymore');
      return;
    }
    this.players[id]['level'] -= 1;
    this.players[id]['power'] = this.players[id]['gear'] + this.players[id]['level'];
  }

}
