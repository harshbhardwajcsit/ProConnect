import { TestBed, inject } from '@angular/core/testing';

import { FetchExperimentsWithTagService } from './fetch-experiments-with-tag.service';

describe('FetchExperimentsWithTagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchExperimentsWithTagService]
    });
  });

  it('should be created', inject([FetchExperimentsWithTagService], (service: FetchExperimentsWithTagService) => {
    expect(service).toBeTruthy();
  }));
});
