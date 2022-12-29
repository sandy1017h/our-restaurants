import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmlpoyeeMainViewComponent } from './emlpoyee-main-view.component';

describe('EmlpoyeeMainViewComponent', () => {
  let component: EmlpoyeeMainViewComponent;
  let fixture: ComponentFixture<EmlpoyeeMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmlpoyeeMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmlpoyeeMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
