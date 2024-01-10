import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendentiComponent } from './dipendenti.component';

describe('DipendentiComponent', () => {
  let component: DipendentiComponent;
  let fixture: ComponentFixture<DipendentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DipendentiComponent]
    });
    fixture = TestBed.createComponent(DipendentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
