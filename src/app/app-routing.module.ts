import { WatchlistRulesLogicComponent } from './watchlist/components/watchlist-rules-logic/watchlist-rules-logic.component';
import { WatchlistRulesTableComponent } from './watchlist/components/watchlist-rules-table/watchlist-rules-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'watchlist', component: WatchlistRulesTableComponent },
  { path: 'watchlist/save', component: WatchlistRulesLogicComponent },
  { path: '', redirectTo: '/watchlist', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
