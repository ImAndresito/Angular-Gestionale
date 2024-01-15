import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAggiungiDipendenteComponent } from './form-aggiungi-dipendente.component';

describe('FormAggiungiDipendenteComponent', () => {
  let component: FormAggiungiDipendenteComponent;
  let fixture: ComponentFixture<FormAggiungiDipendenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAggiungiDipendenteComponent]
    });
    fixture = TestBed.createComponent(FormAggiungiDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
