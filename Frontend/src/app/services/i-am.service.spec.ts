import { TestBed } from '@angular/core/testing';

import { IAmService } from './i-am.service';

describe('IAmService', () => {
  let service: IAmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IAmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
