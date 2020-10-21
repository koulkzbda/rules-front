import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceRulesTableComponent } from './compliance-rules-table.component';

describe('ComplianceRulesTableComponent', () => {
  let component: ComplianceRulesTableComponent;
  let fixture: ComponentFixture<ComplianceRulesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceRulesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceRulesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
