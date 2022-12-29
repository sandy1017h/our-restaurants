import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsMainViewComponent } from './clients-main-view.component';

describe('ClientsMainViewComponent', () => {
  let component: ClientsMainViewComponent;
  let fixture: ComponentFixture<ClientsMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
