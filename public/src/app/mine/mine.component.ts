import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  display_Question;
  answer="";
  constructor(private _httpService: HttpService,
  private _route: ActivatedRoute,
  private _router: Router
  ) { }

  ngOnInit() {
    this.display_Question = this._httpService.algos[this._httpService.index][0];
  }
  submitAnswer() {
    if (Number(this.answer) == Number(this._httpService.algos[this._httpService.index][1])) {
      this._httpService.current_val ++;
      this._httpService.num_coins ++;
      if (this._httpService.index == this._httpService.algos.length-1) {
        this._httpService.index = 0;
      } else {
        this._httpService.index++;
      }
      console.log(this._httpService.num_coins);
      this.display_Question = this._httpService.algos[this._httpService.index][0];
      var randomNum = Math.floor(Math.random() * 10000) + 1;
      this._httpService.ledger.push({action:'Mined', amount: 1, value: this._httpService.current_val, id: randomNum});
      this._router.navigate(['/browse']);
    } else {
      this.answer = "";
    }
    console.log("ELSE");
  }
}
