import { TestBed } from '@angular/core/testing';

import { FormsGeneratorService } from './forms-generator.service';

describe('FormsGeneratorService', () => {
  let service: FormsGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
