import { TestBed } from '@angular/core/testing';

import { AddClientSaveService } from './add-client-save.service';

describe('AddClientSaveService', () => {
  let service: AddClientSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddClientSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
