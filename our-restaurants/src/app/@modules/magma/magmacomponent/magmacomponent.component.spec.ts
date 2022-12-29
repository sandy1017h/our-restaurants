import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagmacomponentComponent } from './magmacomponent.component';

describe('MagmacomponentComponent', () => {
  let component: MagmacomponentComponent;
  let fixture: ComponentFixture<MagmacomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagmacomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagmacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
