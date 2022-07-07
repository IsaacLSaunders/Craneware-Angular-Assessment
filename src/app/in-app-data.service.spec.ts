import { TestBed } from '@angular/core/testing';

import { InAppDataService } from './in-app-data.service';

describe('InAppDataService', () => {
  let service: InAppDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InAppDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
