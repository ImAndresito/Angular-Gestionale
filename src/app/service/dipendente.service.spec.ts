import { TestBed } from '@angular/core/testing';

import { DipendenteService } from './dipendente.service';

describe('DipendenteService', () => {
  let service: DipendenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DipendenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
