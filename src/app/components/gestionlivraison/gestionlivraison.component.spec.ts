import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionlivraisonComponent } from './gestionlivraison.component';

describe('GestionlivraisonComponent', () => {
  let component: GestionlivraisonComponent;
  let fixture: ComponentFixture<GestionlivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionlivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionlivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
