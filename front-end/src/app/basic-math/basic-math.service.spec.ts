import { TestBed, inject } from '@angular/core/testing';

import { BasicMathService } from './basic-math.service';

describe('BasicMathService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicMathService]
    });
  });

  it('should be created', inject([BasicMathService], (service: BasicMathService) => {
    expect(service).toBeTruthy();
  }));
});
