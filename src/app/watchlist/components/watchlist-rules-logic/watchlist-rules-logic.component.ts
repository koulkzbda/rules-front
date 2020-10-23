import { Router } from '@angular/router';
import { SaveWatchlistDiaologueComponent } from './save-watchlist-diaologue/save-watchlist-diaologue.component';
import { watchlist1 } from './../../mocks/watchlist.mock';
import { Rule, Watchlist, LogicalContainer } from './../../models/watchlist.model';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-watchlist-rules-logic',
  templateUrl: './watchlist-rules-logic.component.html',
  styleUrls: ['./watchlist-rules-logic.component.scss']
})
export class WatchlistRulesLogicComponent implements OnInit {
  watchlist: Watchlist;
  initialRuleSet: Rule[];
  watchlistNames: string[];
  listContainerRules = [];
  constructor(public dialog: MatDialog, private router: Router) { }

  getListContainerConnected(container: LogicalContainer): string[] {
    return this.listContainerRules
      .filter(containerId => containerId.split('-')[1] !== container.currentInstance.toString())
      .concat('ruleSet');
  }

  addContainer(container: LogicalContainer): void {
    container.containers.push(new LogicalContainer(container.getOppositeType()));
    this.listContainerRules.push('containerRules-' + LogicalContainer.nbOfInstances);
  }

  deleteContainer(parentContainer: LogicalContainer, childContainer: LogicalContainer): void {
    parentContainer.containers = parentContainer.containers
      .filter(container => JSON.stringify(container) !== JSON.stringify(childContainer));
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
  }

  resetRuleSet(): void {
    this.watchlist.ruleSet = this.initialRuleSet.slice();
  }

  ngOnInit(): void {
    for (let index = 1; index <= LogicalContainer.nbOfInstances; index++) {
      this.listContainerRules.push('containerRules-' + index);
    }
    //this will have to be retreived from the backend API
    this.watchlistNames = ['Watchlist 1'];
    this.watchlist = watchlist1;

    this.initialRuleSet = this.watchlist.ruleSet.slice();
  }

}
