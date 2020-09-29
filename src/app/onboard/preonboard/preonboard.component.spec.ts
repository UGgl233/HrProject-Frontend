import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreonboardComponent } from './preonboard.component';

describe('PreonboardComponent', () => {
  let component: PreonboardComponent;
  let fixture: ComponentFixture<PreonboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreonboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreonboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
