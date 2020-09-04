import { TestBed } from '@angular/core/testing';

import { PhysicianAPIService } from './physician-api.service';

describe('PhysicianAPIService', () => {
  let service: PhysicianAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysicianAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
