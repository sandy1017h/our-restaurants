import { TestBed } from '@angular/core/testing';

import { UpdateEmployeeSaveService } from './update-employee-save.service';

describe('UpdateEmployeeSaveService', () => {
  let service: UpdateEmployeeSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateEmployeeSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
