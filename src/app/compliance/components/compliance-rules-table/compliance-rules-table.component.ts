import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FIELD_GROUP } from './../../../watchlist/mocks/fieldGroup.mock';
import { Watchlist } from './../../../watchlist/models/watchlist.model';
import { FieldType, NumericalFieldType, FieldGroup } from './../../../watchlist/models/fieldType.model';
import { MatTableDataSource } from '@angular/material/table';
import { compliance1, ESGGroup, UCITSGroup, CustomGroup } from './../../mocks/compliance.mock';
import { Compliance, ComplianceRule, ComplianceRuleGroup } from './../../models/compliance.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compliance-rules-table',
  templateUrl: './compliance-rules-table.component.html',
  styleUrls: ['./compliance-rules-table.component.scss']
})
export class ComplianceRulesTableComponent implements OnInit {
  compliance: Compliance;
  complanceNames: string[];
  dataSource: MatTableDataSource<ComplianceRule>;
  displayedColumns = ['drag', 'group', 'complianceRule', 'aggregation', 'condition', 'warning', 'breach', 'regulationThreshold', 'actions'];
  groups: ComplianceRuleGroup[];
  fieldTypes = [];

  constructor() { }

  addNewRule(): void {
    this.dataSource.data
      .push(new ComplianceRule(ESGGroup, ESGGroup.watchlists[0].mainContainer.rules[0], new NumericalFieldType('MV Weight'), '>', 'N/A', null, 5));
    this.dataSource.filter = '';
  }

  deleteRule(index: number): void {
    this.compliance.complianceRules.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.compliance.complianceRules);
  }

  compareByGroupLabel(group1: ComplianceRuleGroup, group2: ComplianceRuleGroup): boolean {
    return group1 && group2 ? group1.label === group2.label : group1 === group2;
  }

  compareByWatchlistLabel(watchlist1: Watchlist, watchlist2: Watchlist): boolean {
    return watchlist1 && watchlist2 ? watchlist1.label === watchlist2.label : watchlist1 === watchlist2;
  }

  compareByFieldLabel(fieldType1: FieldType, fieldType2: FieldType): boolean {
    return fieldType1 && fieldType2 ? fieldType1.label === fieldType2.label : fieldType1 === fieldType2;
  }

  drop(event: CdkDragDrop<ComplianceRule[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.compliance = compliance1;
    this.complanceNames = ['Compliance 1'];
    this.dataSource = new MatTableDataSource(this.compliance.complianceRules);
    this.groups = [ESGGroup, UCITSGroup, CustomGroup];
    FIELD_GROUP.forEach(fieldGroup => {
      fieldGroup.fields.forEach(fieldType => {
        if (fieldType instanceof NumericalFieldType) {
          this.fieldTypes.push(fieldType);
        }
      });
    });
  }

}
