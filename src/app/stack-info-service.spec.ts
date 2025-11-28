import { TestBed } from '@angular/core/testing';

import { StackInfoService } from './stack-info-service';

describe('Stack', () => {
  let service: StackInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
