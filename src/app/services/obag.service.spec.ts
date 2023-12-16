import { TestBed } from '@angular/core/testing';

import { ObagService } from './obag.service';

describe('ObagService', () => {
  let service: ObagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
