import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistRulesLogicComponent } from './watchlist-rules-logic.component';

describe('WatchlistRulesLogicComponent', () => {
  let component: WatchlistRulesLogicComponent;
  let fixture: ComponentFixture<WatchlistRulesLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistRulesLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistRulesLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
