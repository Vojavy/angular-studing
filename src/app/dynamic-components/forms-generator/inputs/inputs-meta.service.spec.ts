import { TestBed } from '@angular/core/testing';

import { InputsMetaService } from './inputs-meta.service';

describe('InputsMetaService', () => {
  let service: InputsMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputsMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
