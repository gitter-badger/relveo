import { TestBed, inject } from '@angular/core/testing';

import { HeatingService } from './heating.service';

describe('HeatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeatingService]
    });
  });

  it('should be created', inject([HeatingService], (service: HeatingService) => {
    expect(service).toBeTruthy();
  }));
});
