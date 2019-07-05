import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpLeavereportComponent } from './view-emp-leavereport.component';

describe('ViewEmpLeavereportComponent', () => {
  let component: ViewEmpLeavereportComponent;
  let fixture: ComponentFixture<ViewEmpLeavereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpLeavereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpLeavereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
