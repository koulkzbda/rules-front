import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveComplianceDialogComponent } from './save-compliance-dialog.component';

describe('SaveComplianceDialogComponent', () => {
  let component: SaveComplianceDialogComponent;
  let fixture: ComponentFixture<SaveComplianceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveComplianceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveComplianceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
