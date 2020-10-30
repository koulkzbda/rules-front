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

  constructor(@Inject(MAT_DIALOG_DATA) public data: ComplianceRuleBuilder, protected complianceService: ComplianceService) { }

  updateCompliance(): void {
    this.data.compliance.complianceRules[this.data.index].rule.label =
      `${this.data.compliance.complianceRules[this.data.index].rule.ruleSet[0].fieldType.label} ${this.data.compliance.complianceRules[this.data.index].rule.ruleSet[0].condition} ${this.data.compliance.complianceRules[this.data.index].rule.ruleSet[0].getInputAsString()}`;
    this.data.compliance.complianceRules[this.data.index].group.watchlists.push(
      this.data.compliance.complianceRules[this.data.index].rule
    );
    this.complianceService.transmitCompliance(this.data.compliance);
  }

  closeDialog(): void {
    this.complianceService.transmitCompliance(this.initialCompliance);
  }

  ngOnInit(): void {
    this.initialCompliance = JSON.parse(JSON.stringify(this.data.compliance));
  }

  compareByFieldLabel(fieldType1: FieldType, fieldType2: FieldType): boolean {
    return fieldType1 && fieldType2 ? fieldType1.label === fieldType2.label : fieldType1 === fieldType2;
  }

}
