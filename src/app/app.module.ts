import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WatchlistRulesTableComponent } from './watchlist/components/watchlist-rules-table/watchlist-rules-table.component';
import { WatchlistRulesLogicComponent } from './watchlist/components/watchlist-rules-logic/watchlist-rules-logic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { SaveWatchlistDiaologueComponent } from './watchlist/components/watchlist-rules-logic/save-watchlist-diaologue/save-watchlist-diaologue.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchlistRulesTableComponent,
    WatchlistRulesLogicComponent,
    SaveWatchlistDiaologueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    DragDropModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
