import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) { }
  players: any = {};
  playersArr: any = [];
  flashDict: any = {};
  ngOnInit() {
    this.players = {};
    this.flashDict = {};
  }

  add() {
    console.log("Trying to add players");
    console.log(this.players);
    console.log(typeof (this.players));
    console.log(Object.keys(this.players).length);
    if (Object.keys(this.players).length < 2) {
      console.log("Need more players!");
      this.flashDict.names = "Need at least two players!";
    }
    else {
      console.log("Good to go!");
      var id = 0;
      for (var property in this.players) {
        console.log(this.players[property]);
        this.playersArr.push({ name: this.players[property], gear: 0, level: 1, power: 1, id: id });
        id++;
      }
      this.flashDict = {};
      console.log(this.playersArr);
      this._httpService.setData(this.playersArr);
      this.players = {};
      this.playersArr = [];
      this._router.navigate(['game']);
      
    }
  }

}
