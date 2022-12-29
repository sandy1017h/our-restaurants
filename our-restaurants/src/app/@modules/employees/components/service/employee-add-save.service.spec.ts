import { TestBed } from '@angular/core/testing';

import { SaveemployeesService } from './employee-add-save.service';

describe('SaveemployeesService', () => {
  let service: SaveemployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveemployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
