import { watchlist1 } from './../mocks/watchlist.mock';
import { HttpClient } from '@angular/common/http';
import { Watchlist } from './../models/watchlist.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  protected watchlist = new Subject<Watchlist>();

  get watchlistObs(): Observable<Watchlist> {
    return this.watchlist.asObservable();
  }

  constructor(private http: HttpClient) { }

  transmitWatchlist(watchlistTransmitted: Watchlist): void {
    this.watchlist.next(watchlistTransmitted);
  }

  getWatchlist(watchlistId: string): Watchlist {
    return watchlist1;
  }

  getWatchlistNames(projectId: string): string[] {
    return ['Watchlist 1'];
  }
}
