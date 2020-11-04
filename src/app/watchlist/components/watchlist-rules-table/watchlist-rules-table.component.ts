import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { WatchlistService } from './../../services/watchlist.service';
import { FIELD_GROUP } from './../../mocks/fieldGroup.mock';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Rule, Watchlist } from '../../models/watchlist.model';
import { MatTableDataSource } from '@angular/material/table';
import { FieldType, NumericalFieldType } from '../../models/fieldType.model';

@Component({
  selector: 'app-watchlist-rules-table',
  templateUrl: './watchlist-rules-table.component.html',
  styleUrls: ['./watchlist-rules-table.component.scss']
})
export class WatchlistRulesTableComponent implements OnInit, OnDestroy {
  watchlistSub: Subscription;
  watchlist = new Watchlist();
  transmittedWatchlist: Watchlist;
  initialRuleSet: Rule[];
  displayedColumns = ['field', 'condition', 'input', 'actions'];
  dataSource: MatTableDataSource<Rule>;
  fieldGroup = FIELD_GROUP;
  complianceIndexSelected: string;

  constructor(protected watchlistService: WatchlistService, protected router: Router, protected route: ActivatedRoute) { }

  addNewRule(): void {
    this.dataSource.data.push(new Rule(new NumericalFieldType('ESG BMK Diff'), '<', ['0']));
    this.dataSource.filter = '';
  }

  deleteRule(index: number): void {
    this.watchlist.ruleSet.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.watchlist.ruleSet);
  }

  compareByFieldLabel(fieldType1: FieldType, fieldType2: FieldType): boolean {
    return fieldType1 && fieldType2 ? fieldType1.label === fieldType2.label : fieldType1 === fieldType2;
  }

  updateWatchlist(): void {
    this.watchlistService.transmitWatchlist(this.watchlist);
  }

  goToLogic(): void {
    this.updateWatchlist();
    if (this.complianceIndexSelected) {
      this.router.navigate(['/save/watchlist', { index: this.complianceIndexSelected }]);
    } else {
      this.router.navigate(['/save/watchlist']);
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const watchlistId = params.get('id');
      const complianceIndex = params.get('index');
      console.log(params);
      this.watchlistSub = this.watchlistService.watchlistObs.subscribe(
        value => this.transmittedWatchlist = value
      );
      if (watchlistId) {
        if (this.transmittedWatchlist && this.transmittedWatchlist.id && watchlistId === this.transmittedWatchlist.id.toString()) {
          this.watchlist = this.transmittedWatchlist;
        } else {
          this.watchlist = this.watchlistService.getWatchlist(watchlistId);
        }
      } else {
        this.watchlist = this.transmittedWatchlist.id ? new Watchlist() : this.transmittedWatchlist;
      }
      if (complianceIndex) {
        console.log(complianceIndex);
        this.complianceIndexSelected = complianceIndex;
      }
    });
    this.dataSource = new MatTableDataSource(this.watchlist.ruleSet);
  }

  ngOnDestroy(): void {
    this.watchlistSub.unsubscribe();
  }
}
