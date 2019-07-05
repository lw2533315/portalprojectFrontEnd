import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpsalaryreportComponent } from './view-empsalaryreport.component';

describe('ViewEmpsalaryreportComponent', () => {
  let component: ViewEmpsalaryreportComponent;
  let fixture: ComponentFixture<ViewEmpsalaryreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpsalaryreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpsalaryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
