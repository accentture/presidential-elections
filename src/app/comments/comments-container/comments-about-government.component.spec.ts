import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAboutGovernmentComponent } from './comments-about-government.component';

describe('CommentsAboutGovernmentComponent', () => {
  let component: CommentsAboutGovernmentComponent;
  let fixture: ComponentFixture<CommentsAboutGovernmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsAboutGovernmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsAboutGovernmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
