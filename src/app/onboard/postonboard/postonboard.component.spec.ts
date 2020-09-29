import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostonboardComponent } from './postonboard.component';

describe('PostonboardComponent', () => {
  let component: PostonboardComponent;
  let fixture: ComponentFixture<PostonboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostonboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostonboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
