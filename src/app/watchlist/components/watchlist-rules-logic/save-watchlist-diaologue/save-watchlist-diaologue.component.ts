import { Watchlist } from './../../../models/watchlist.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-save-watchlist-diaologue',
  templateUrl: './save-watchlist-diaologue.component.html',
  styleUrls: ['./save-watchlist-diaologue.component.scss']
})
export class SaveWatchlistDiaologueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Watchlist) { }

  saveWatchlist(): void { }

  ngOnInit(): void {
  }

}
