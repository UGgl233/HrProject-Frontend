import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrFileListComponent } from './hr-file-list.component';

describe('HrFileListComponent', () => {
  let component: HrFileListComponent;
  let fixture: ComponentFixture<HrFileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrFileListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
