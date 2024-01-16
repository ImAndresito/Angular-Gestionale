import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatoAttualeComponent } from './stato-attuale.component';

describe('StatoAttualeComponent', () => {
  let component: StatoAttualeComponent;
  let fixture: ComponentFixture<StatoAttualeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatoAttualeComponent]
    });
    fixture = TestBed.createComponent(StatoAttualeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
