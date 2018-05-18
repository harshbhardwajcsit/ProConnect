import { TestBed, inject } from '@angular/core/testing';

import { FetchExperimentCategoriesService } from './fetch-experiment-categories.service';

describe('FetchExperimentCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchExperimentCategoriesService]
    });
  });

  it('should be created', inject([FetchExperimentCategoriesService], (service: FetchExperimentCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
