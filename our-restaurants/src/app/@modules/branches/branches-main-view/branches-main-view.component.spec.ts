import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesMainViewComponent } from './branches-main-view.component';

describe('BranchesMainViewComponent', () => {
  let component: BranchesMainViewComponent;
  let fixture: ComponentFixture<BranchesMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchesMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchesMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
