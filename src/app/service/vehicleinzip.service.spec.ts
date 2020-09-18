import { TestBed } from '@angular/core/testing';

import { VehicleinzipService } from './vehicleinzip.service';

describe('VehicleinzipService', () => {
  let service: VehicleinzipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleinzipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
