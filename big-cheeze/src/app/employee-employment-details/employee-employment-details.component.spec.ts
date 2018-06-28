import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEmploymentDetailsComponent } from './employee-employment-details.component';

describe('EmployeeEmploymentDetailsComponent', () => {
  let component: EmployeeEmploymentDetailsComponent;
  let fixture: ComponentFixture<EmployeeEmploymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEmploymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEmploymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
