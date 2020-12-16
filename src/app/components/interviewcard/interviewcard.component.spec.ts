import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewcardComponent } from './interviewcard.component';

describe('InterviewcardComponent', () => {
  let component: InterviewcardComponent;
  let fixture: ComponentFixture<InterviewcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
