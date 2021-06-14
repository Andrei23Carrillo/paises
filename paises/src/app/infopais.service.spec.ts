import { TestBed } from '@angular/core/testing';

import { InfopaisService } from './infopais.service';

describe('InfopaisService', () => {
  let service: InfopaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfopaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
