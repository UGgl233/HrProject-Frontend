import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisastatusComponent } from './visastatus.component';

describe('VisastatusComponent', () => {
  let component: VisastatusComponent;
  let fixture: ComponentFixture<VisastatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisastatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisastatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
