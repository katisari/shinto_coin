import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sell-buy',
  templateUrl: './sell-buy.component.html',
  styleUrls: ['./sell-buy.component.css']
})
export class SellBuyComponent implements OnInit {
  current_val = 0
  num_coins = 0;
  method="";
  input_number;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
  private _router: Router) {}
  ngOnInit() {
    this._route.params.subscribe((params: Params)=> {
      this.method = this.capitalizeFirstLetter(params['option'].split('_')[0]);
    })
    this.current_val = this._httpService.current_val;
    this.num_coins = this._httpService.num_coins;
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  submitForm() {
    if (this.method == "Buy") {
      this._httpService.current_val += 1;
      this._httpService.num_coins += Number(this.input_number);
      var randomNum = Math.floor(Math.random() * 10000) + 1;
      this._httpService.ledger.push({action:'Bought', amount: this.input_number, value: this._httpService.current_val, id: randomNum});

    } else {
      if (this._httpService.current_val >= 1) {
        this._httpService.current_val -= 1;
        this._httpService.num_coins -= 1;
        this._httpService.ledger.push({action:'Sold', amount: this.input_number, value: this._httpService.current_val, id: randomNum});
      }
    }
    console.log(this._httpService.current_val)
    this.current_val = this._httpService.current_val;
    this.num_coins = this._httpService.num_coins;
  }
}