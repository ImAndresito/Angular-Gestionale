import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDipendenteComponent } from './info-dipendente.component';

describe('InfoDipendenteComponent', () => {
  let component: InfoDipendenteComponent;
  let fixture: ComponentFixture<InfoDipendenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoDipendenteComponent],
    });
    fixture = TestBed.createComponent(InfoDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
