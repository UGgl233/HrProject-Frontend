import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityReportingComponent } from './facility-reporting.component';

describe('FacilityReportingComponent', () => {
  let component: FacilityReportingComponent;
  let fixture: ComponentFixture<FacilityReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityReportingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
