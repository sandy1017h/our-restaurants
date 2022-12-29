import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierdboardComponent } from './cashierdboard.component';

describe('CashierdboardComponent', () => {
  let component: CashierdboardComponent;
  let fixture: ComponentFixture<CashierdboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashierdboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierdboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
