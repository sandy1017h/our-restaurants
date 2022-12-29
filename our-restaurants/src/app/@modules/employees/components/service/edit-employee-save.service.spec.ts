import { TestBed } from '@angular/core/testing';

import { EditEmployeeSaveService } from './edit-employee-save.service';

describe('EditEmployeeSaveService', () => {
  let service: EditEmployeeSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditEmployeeSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
