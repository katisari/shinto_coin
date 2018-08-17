import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  activity = {}
  constructor(private _httpService: HttpService,
  private _route: ActivatedRoute,
  private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      for (var activity of this._httpService.ledger) {
        if (activity.id == params['id']) {
          this.activity = activity;
        }
      }
    })
  }


}
