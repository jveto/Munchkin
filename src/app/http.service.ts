import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient, private _router: Router) { }

  private data;

  setData(data) {
    this.data = data;
    console.log("in http service");
    console.log(this.data);
  }

  getData() {
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData() {
    this.data = undefined;
  }

}
