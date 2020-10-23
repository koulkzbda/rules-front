import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Compliance } from 'src/app/compliance/models/compliance.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-compliance-dialog',
  templateUrl: './save-compliance-dialog.component.html',
  styleUrls: ['./save-compliance-dialog.component.scss']
})
export class SaveComplianceDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Compliance, private router: Router) { }

  saveCompliance(): void {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
  }

}
