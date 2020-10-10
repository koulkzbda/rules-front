import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistRulesTableComponent } from './watchlist-rules-table.component';

describe('WatchlistRulesTableComponent', () => {
  let component: WatchlistRulesTableComponent;
  let fixture: ComponentFixture<WatchlistRulesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistRulesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistRulesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
