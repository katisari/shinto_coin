import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  index = 0;
  current_val = 1.00;
  num_coins = 0;
  algos = [['1+2 is ?', 3], ['what is the 1st Fibonacci number?', 1]];
  ledger = [];
  constructor(private _http: HttpClient) { }
  nextQuestion() {
    if(this.index == this.algos.length-1) {
      this.index = 0;
    } else {
      this.index++;
    }
  }
  
}
