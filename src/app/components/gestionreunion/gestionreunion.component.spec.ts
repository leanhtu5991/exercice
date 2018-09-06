import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionreunionComponent } from './gestionreunion.component';

describe('GestionreunionComponent', () => {
  let component: GestionreunionComponent;
  let fixture: ComponentFixture<GestionreunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionreunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionreunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
