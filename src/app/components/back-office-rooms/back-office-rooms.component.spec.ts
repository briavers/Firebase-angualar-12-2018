import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeRoomsComponent } from './back-office-rooms.component';

describe('BackOfficeRoomsComponent', () => {
  let component: BackOfficeRoomsComponent;
  let fixture: ComponentFixture<BackOfficeRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackOfficeRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
