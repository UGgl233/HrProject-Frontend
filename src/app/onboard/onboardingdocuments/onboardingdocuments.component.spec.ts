import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingdocumentsComponent } from './onboardingdocuments.component';

describe('OnboardingdocumentsComponent', () => {
  let component: OnboardingdocumentsComponent;
  let fixture: ComponentFixture<OnboardingdocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingdocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
