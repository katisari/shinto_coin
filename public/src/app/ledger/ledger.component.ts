import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  activites = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.activites = this._httpService.ledger
  }
}
