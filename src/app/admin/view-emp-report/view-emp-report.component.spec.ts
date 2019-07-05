import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpReportComponent } from './view-emp-report.component';

describe('ViewEmpReportComponent', () => {
  let component: ViewEmpReportComponent;
  let fixture: ComponentFixture<ViewEmpReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
