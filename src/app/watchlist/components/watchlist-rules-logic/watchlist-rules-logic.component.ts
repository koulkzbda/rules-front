import { watchlist1 } from './../../mocks/watchlist.mock';
import { Watchlist } from './../../models/watchlist.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist-rules-logic',
  templateUrl: './watchlist-rules-logic.component.html',
  styleUrls: ['./watchlist-rules-logic.component.scss']
})
export class WatchlistRulesLogicComponent implements OnInit {
  watchlist = watchlist1;
  constructor() { }

  ngOnInit(): void {
  }

}
