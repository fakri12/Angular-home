import { TestBed } from '@angular/core/testing';

import { panierservice } from './panierservice.service';

describe('PanierserviceService', () => {
  let service: panierservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(panierservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
