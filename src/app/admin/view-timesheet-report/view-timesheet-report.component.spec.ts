import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimesheetReportComponent } from './view-timesheet-report.component';

describe('ViewTimesheetReportComponent', () => {
  let component: ViewTimesheetReportComponent;
  let fixture: ComponentFixture<ViewTimesheetReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTimesheetReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTimesheetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
