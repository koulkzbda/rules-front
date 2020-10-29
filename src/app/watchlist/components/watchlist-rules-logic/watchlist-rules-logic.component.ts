import { WatchlistService } from './../../services/watchlist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SaveWatchlistDiaologueComponent } from './save-watchlist-diaologue/save-watchlist-diaologue.component';
import { Rule, Watchlist, LogicalContainer } from './../../models/watchlist.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-watchlist-rules-logic',
  templateUrl: './watchlist-rules-logic.component.html',
  styleUrls: ['./watchlist-rules-logic.component.scss']
})
export class WatchlistRulesLogicComponent implements OnInit, OnDestroy {
  watchlistSub: Subscription;
  watchlist = new Watchlist();
  initialRuleSet: Rule[];
  watchlistNames: string[];
  listContainerRules = [];
  constructor(
    public dialog: MatDialog, protected watchlistService: WatchlistService, protected router: Router, protected route: ActivatedRoute) {
  }

  getListContainerConnected(container: LogicalContainer): string[] {
    if (container) {
      return this.listContainerRules
        .filter(containerId => containerId.split('-')[1] !== container.currentInstance.toString())
        .concat('ruleSet');
    }
    return ['ruleSet'];
  }

  addContainer(container: LogicalContainer): void {
    container.containers.push(new LogicalContainer(container.getOppositeType()));
    this.listContainerRules.push('containerRules-' + LogicalContainer.nbOfInstances);
  }

  deleteContainer(parentContainer: LogicalContainer, childContainer: LogicalContainer): void {
    parentContainer.containers = parentContainer.containers
      .filter(container => JSON.stringify(container) !== JSON.stringify(childContainer));
    this.updateWatchlist();
  }

  saveWatchlist(): void {
    this.router.navigate(['/dashboard']);
  }

  saveOrOpenDialog(): void {
    if (this.watchlistNames.indexOf(this.watchlist.label) !== -1) {
      this.openDialog();
    } else {
      this.saveWatchlist();
    }
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.watchlist;
    dialogConfig.maxWidth = 400;
    const dialogRef = this.dialog.open(SaveWatchlistDiaologueComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => { });
  }

  dropWithoutDuplicates(event: CdkDragDrop<Rule[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.resetRuleSet();
    }
    this.updateWatchlist();
  }

  resetRuleSet(): void {
    this.watchlist.ruleSet = this.initialRuleSet.slice();
  }

  retrieveWatchlist(): void {
    this.watchlistSub = this.watchlistService.watchlistObs.subscribe(
      value => {
        this.watchlist = value;
        this.initialRuleSet = this.watchlist.ruleSet.slice();
      }
    );
  }

  updateWatchlist(): void {
    this.watchlistService.transmitWatchlist(this.watchlist);
  }

  ngOnInit(): void {
    for (let index = 1; index <= LogicalContainer.nbOfInstances; index++) {
      this.listContainerRules.push('containerRules-' + index);
    }
    //this will have to be retreived from the backend API
    this.watchlistNames = this.watchlistService.getWatchlistNames('1');
    this.retrieveWatchlist();
  }

  ngOnDestroy(): void {
    this.watchlistSub.unsubscribe();
  }
}
