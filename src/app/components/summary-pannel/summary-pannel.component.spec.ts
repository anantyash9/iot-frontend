import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPannelComponent } from './summary-pannel.component';

describe('SummaryPannelComponent', () => {
  let component: SummaryPannelComponent;
  let fixture: ComponentFixture<SummaryPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryPannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
