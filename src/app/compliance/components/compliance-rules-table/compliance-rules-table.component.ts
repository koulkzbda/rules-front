import { Subscription } from 'rxjs';
import { ComplianceService } from './../../services/compliance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SaveComplianceDialogComponent } from './save-compliance-dialogue/save-compliance-dialog/save-compliance-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FIELD_GROUP } from './../../../watchlist/mocks/fieldGroup.mock';
import { Watchlist } from './../../../watchlist/models/watchlist.model';
import { FieldType, NumericalFieldType } from './../../../watchlist/models/fieldType.model';
import { MatTableDataSource } from '@angular/material/table';
import { Compliance, ComplianceRule, ComplianceRuleGroup } from './../../models/compliance.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-compliance-rules-table',
  templateUrl: './compliance-rules-table.component.html',
  styleUrls: ['./compliance-rules-table.component.scss']
})
export class ComplianceRulesTableComponent implements OnInit, OnDestroy {
  complianceSub: Subscription;
  compliance: Compliance;
  transmittedCompliance: Compliance;
  complianceNames: string[];
  dataSource: MatTableDataSource<ComplianceRule>;
  displayedColumns = ['drag', 'group', 'complianceRule', 'aggregation', 'condition', 'warning', 'breach', 'regulationThreshold', 'actions'];
  groups: ComplianceRuleGroup[];
  fieldTypes = [];

  constructor(
    public dialog: MatDialog,
    protected complianceService: ComplianceService,
    protected router: Router,
    protected route: ActivatedRoute) { }

  addNewRule(): void {
    const complianceRuleAdded = new ComplianceRule(this.groups[0], this.groups[0].watchlists[0].mainContainer.rules[0], new NumericalFieldType('MV Weight'), '>', 'N/A', null, 5);
    this.dataSource.data
      .push(complianceRuleAdded);
    this.dataSource.filter = '';
    console.log(complianceRuleAdded);
  }

  deleteRule(index: number): void {
    this.compliance.complianceRules.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.compliance.complianceRules);
  }

  saveCompliance(): void {
    this.router.navigate(['/dashboard']);
  }

  saveOrOpenDialog(): void {
    if (this.complianceNames.indexOf(this.compliance.label) !== -1) {
      this.openDialog();
    } else {
      this.saveCompliance();
    }
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.compliance;
    dialogConfig.maxWidth = 400;
    const dialogRef = this.dialog.open(SaveComplianceDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => { });
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

  updateCompliance(): void {
    this.complianceService.transmitCompliance(this.compliance);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const complianceId = params.get('complianceId');
      this.complianceSub = this.complianceService.complianceObs.subscribe(
        value => this.transmittedCompliance = value
      );
      if (complianceId) {
        if (this.transmittedCompliance && this.transmittedCompliance.id && complianceId === this.transmittedCompliance.id.toString()) {
          this.compliance = this.transmittedCompliance;
        } else {
          this.compliance = this.complianceService.getCompliance(complianceId);
        }
      } else {
        this.compliance = this.transmittedCompliance.id ? new Compliance() : this.transmittedCompliance;
      }
    });
    this.complianceNames = this.complianceService.getComplianceNames('1');
    this.dataSource = new MatTableDataSource(this.compliance.complianceRules);
    this.groups = this.complianceService.getComplianceGroup('1');
    FIELD_GROUP.forEach(fieldGroup => {
      fieldGroup.fields.forEach(fieldType => {
        if (fieldType instanceof NumericalFieldType) {
          this.fieldTypes.push(fieldType);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.complianceSub.unsubscribe();
  }

}
