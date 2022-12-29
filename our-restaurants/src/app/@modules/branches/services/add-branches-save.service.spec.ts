import { TestBed } from '@angular/core/testing';

import { AddBranchesSaveService } from './add-branches-save.service';

describe('AddBranchesSaveService', () => {
  let service: AddBranchesSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBranchesSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
