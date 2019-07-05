import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalaryReportComponent } from './view-salary-report.component';

describe('ViewSalaryReportComponent', () => {
  let component: ViewSalaryReportComponent;
  let fixture: ComponentFixture<ViewSalaryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSalaryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSalaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
