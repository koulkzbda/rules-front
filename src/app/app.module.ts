import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WatchlistRulesTableComponent } from './watchlist/components/watchlist-rules-table/watchlist-rules-table.component';
import { WatchlistRulesLogicComponent } from './watchlist/components/watchlist-rules-logic/watchlist-rules-logic.component';
import { SaveWatchlistDiaologueComponent } from './watchlist/components/watchlist-rules-logic/save-watchlist-diaologue/save-watchlist-diaologue.component';
import { ComplianceRulesTableComponent } from './compliance/components/compliance-rules-table/compliance-rules-table.component';
import { SaveComplianceDialogComponent } from './compliance/components/compliance-rules-table/save-compliance-dialogue/save-compliance-dialog/save-compliance-dialog.component';
import { ProjectCycleComponent } from './projects/components/project-cycle/project-cycle/project-cycle.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CreateRuleDialogComponent } from './compliance/components/compliance-rules-table/create-rule-dialog/create-rule-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchlistRulesTableComponent,
    WatchlistRulesLogicComponent,
    SaveWatchlistDiaologueComponent,
    ComplianceRulesTableComponent,
    SaveComplianceDialogComponent,
    ProjectCycleComponent,
    CreateRuleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DragDropModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
