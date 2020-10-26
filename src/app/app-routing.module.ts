import { ProjectCycleComponent } from './projects/components/project-cycle/project-cycle/project-cycle.component';
import { ComplianceRulesTableComponent } from './compliance/components/compliance-rules-table/compliance-rules-table.component';
import { WatchlistRulesLogicComponent } from './watchlist/components/watchlist-rules-logic/watchlist-rules-logic.component';
import { WatchlistRulesTableComponent } from './watchlist/components/watchlist-rules-table/watchlist-rules-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: ProjectCycleComponent },
  { path: 'watchlist', redirectTo: '/watchlist/', pathMatch: 'full' },
  {
    path: 'watchlist/:watchlistId',
    component: WatchlistRulesTableComponent
  },
  { path: 'save/watchlist', component: WatchlistRulesLogicComponent },
  { path: 'compliance', component: ComplianceRulesTableComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
