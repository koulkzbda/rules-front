import { FieldType, FIELD_GROUP, NumericalFieldType } from './../../store/fieldGroup';
import { watchlist1 } from './../../mocks/watchlist.mock';
import { Component, OnInit } from '@angular/core';
import { Rule, Watchlist } from '../../models/watchlist.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-watchlist-rules-table',
  templateUrl: './watchlist-rules-table.component.html',
  styleUrls: ['./watchlist-rules-table.component.scss']
})
export class WatchlistRulesTableComponent implements OnInit {
  watchlist: Watchlist;
  initialRuleSet: Rule[];
  watchlistNames: string[];
  displayedColumns = ['field', 'condition', 'input', 'actions'];
  dataSource: MatTableDataSource<Rule>;
  fieldGroup = FIELD_GROUP;
  fieldControl = new FormControl();

  constructor() { }

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

  ngOnInit(): void {
    this.watchlistNames = ['Watchlist 1'];
    this.watchlist = watchlist1;
    this.dataSource = new MatTableDataSource(this.watchlist.ruleSet);
  }

}
