import { TestBed, inject } from '@angular/core/testing';

import { RequestResultServiceService } from './request-result-service.service';

describe('RequestResultServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestResultServiceService]
    });
  });

  it('should be created', inject([RequestResultServiceService], (service: RequestResultServiceService) => {
    expect(service).toBeTruthy();
  }));
});
