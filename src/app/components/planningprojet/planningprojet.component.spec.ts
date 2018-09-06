import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningprojetComponent } from './planningprojet.component';

describe('PlanningprojetComponent', () => {
  let component: PlanningprojetComponent;
  let fixture: ComponentFixture<PlanningprojetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningprojetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
