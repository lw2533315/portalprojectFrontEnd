import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailtrieveComponent } from './emailtrieve.component';

describe('EmailtrieveComponent', () => {
  let component: EmailtrieveComponent;
  let fixture: ComponentFixture<EmailtrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailtrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailtrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
