import { TestBed } from '@angular/core/testing';

import { BoxeursService } from './boxeurs.service';

describe('BoxeursService', () => {
  let service: BoxeursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxeursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
