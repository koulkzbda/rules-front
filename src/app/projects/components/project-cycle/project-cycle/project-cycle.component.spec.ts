import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCycleComponent } from './project-cycle.component';

describe('ProjectCycleComponent', () => {
  let component: ProjectCycleComponent;
  let fixture: ComponentFixture<ProjectCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
