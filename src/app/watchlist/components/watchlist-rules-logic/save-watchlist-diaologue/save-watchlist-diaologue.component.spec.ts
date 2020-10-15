import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveWatchlistDiaologueComponent } from './save-watchlist-diaologue.component';

describe('SaveWatchlistDiaologueComponent', () => {
  let component: SaveWatchlistDiaologueComponent;
  let fixture: ComponentFixture<SaveWatchlistDiaologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveWatchlistDiaologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveWatchlistDiaologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
