import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiDipendenteComponent } from './aggiungi-dipendente.component';

describe('AggiungiDipendenteComponent', () => {
  let component: AggiungiDipendenteComponent;
  let fixture: ComponentFixture<AggiungiDipendenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggiungiDipendenteComponent],
    });
    fixture = TestBed.createComponent(AggiungiDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
