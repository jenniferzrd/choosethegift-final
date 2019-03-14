import { TestBed, inject } from '@angular/core/testing';

import { CreateIdeaService } from './create-idea.service';

describe('CreateIdeaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateIdeaService]
    });
  });

  it('should be created', inject([CreateIdeaService], (service: CreateIdeaService) => {
    expect(service).toBeTruthy();
  }));
});
