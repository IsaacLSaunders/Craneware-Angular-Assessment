import { TestBed } from '@angular/core/testing';

import { AuthorAndTitleService } from './author-and-title.service';

describe('AuthorAndTitleService', () => {
  let service: AuthorAndTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorAndTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
