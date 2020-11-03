import { NumericalFieldType } from './../../../../watchlist/models/fieldType.model';
import { Rule, Watchlist } from './../../../../watchlist/models/watchlist.model';
import { Compliance, ComplianceRuleBuilder } from './../../../models/compliance.model';
import { ComplianceService } from './../../../services/compliance.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FieldType } from 'src/app/watchlist/models/fieldType.model';

@Component({
  selector: 'app-create-rule-dialog',
  templateUrl: './create-rule-dialog.component.html',
  styleUrls: ['./create-rule-dialog.component.scss']
})
export class CreateRuleDialogComponent implements OnInit {
  initialCompliance: Compliance;
  whatchlistAdded = new Watchlist();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ComplianceRuleBuilder, protected complianceService: ComplianceService) { }

  updateCompliance(): void {
    this.whatchlistAdded.label =
      `${this.whatchlistAdded.ruleSet[0].fieldType.label} ${this.whatchlistAdded.ruleSet[0].condition} ${this.whatchlistAdded.ruleSet[0].getInputAsString()}`;
    this.data.groups.forEach(group => {
      if (group.label === this.data.compliance.complianceRules[this.data.index].group) {
        group.watchlists.push(this.whatchlistAdded);
      }
    });
    this.data.compliance.complianceRules[this.data.index].rule = this.whatchlistAdded;
    this.complianceService.transmitGroups(this.data.groups);
    this.complianceService.transmitCompliance(this.data.compliance);
  }

  closeDialog(): void {
    this.complianceService.transmitCompliance(this.initialCompliance);
  }

  ngOnInit(): void {
    this.initialCompliance = JSON.parse(JSON.stringify(this.data.compliance));
    this.whatchlistAdded.ruleSet.push(new Rule(new NumericalFieldType('ESG BMK Diff'), '<', ['0']));
  }

  compareByFieldLabel(fieldType1: FieldType, fieldType2: FieldType): boolean {
    return fieldType1 && fieldType2 ? fieldType1.label === fieldType2.label : fieldType1 === fieldType2;
  }

}
