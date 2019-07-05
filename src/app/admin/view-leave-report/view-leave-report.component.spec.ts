import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveReportComponent } from './view-leave-report.component';

describe('ViewLeaveReportComponent', () => {
  let component: ViewLeaveReportComponent;
  let fixture: ComponentFixture<ViewLeaveReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLeaveReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeaveReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
