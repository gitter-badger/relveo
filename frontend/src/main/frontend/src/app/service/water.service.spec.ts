import { TestBed, inject } from '@angular/core/testing';

import { WaterService } from './water.service';

describe('WaterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaterService]
    });
  });

  it('should be created', inject([WaterService], (service: WaterService) => {
    expect(service).toBeTruthy();
  }));
});
