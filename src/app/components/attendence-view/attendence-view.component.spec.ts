import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceViewComponent } from './attendence-view.component';

describe('AttendenceViewComponent', () => {
  let component: AttendenceViewComponent;
  let fixture: ComponentFixture<AttendenceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendenceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendenceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
