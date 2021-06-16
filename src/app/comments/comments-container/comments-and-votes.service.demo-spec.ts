import { TestBed } from '@angular/core/testing';

import { CommentsAndVotesService } from './comments-and-votes.service';

describe('CommentsAndVotesService', () => {
  let service: CommentsAndVotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsAndVotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
