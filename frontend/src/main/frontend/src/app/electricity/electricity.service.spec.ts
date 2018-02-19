import { TestBed, inject } from '@angular/core/testing';

import { ElectricityService } from './electricity.service';

describe('ElectricityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectricityService]
    });
  });

  it('should be created', inject([ElectricityService], (service: ElectricityService) => {
    expect(service).toBeTruthy();
  }));
});
