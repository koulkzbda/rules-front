import { watchlist1 } from './../../mocks/watchlist.mock';
import { Rule, Watchlist, LogicalContainer } from './../../models/watchlist.model';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-watchlist-rules-logic',
  templateUrl: './watchlist-rules-logic.component.html',
  styleUrls: ['./watchlist-rules-logic.component.scss']
})
export class WatchlistRulesLogicComponent implements OnInit {
  watchlist = watchlist1;
  listContainerRules = [];
  constructor() { }

  getListContainerConnected(container: LogicalContainer): string[] {
    return this.listContainerRules
      .filter(containerId => containerId.split('-')[1] !== container.currentInstance.toString())
      .concat('ruleSet');
  }

  addContainer(container: LogicalContainer): void {
    container.containers.push(new LogicalContainer(container.getOppositeType()));
  }

  deleteContainer(parentContainer: LogicalContainer, childContainer: LogicalContainer): void {
    parentContainer.containers = parentContainer.containers
      .filter(container => JSON.stringify(container) !== JSON.stringify(childContainer));
  }

  drop(event: CdkDragDrop<Rule[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  ngOnInit(): void {
    for (let index = 1; index <= LogicalContainer.nbOfInstances; index++) {
      this.listContainerRules.push('containerRules-' + index);
    }
  }

}
