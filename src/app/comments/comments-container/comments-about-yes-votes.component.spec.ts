import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAboutYesVotesComponent } from './comments-about-yes-votes.component';

describe('CommentsAboutYesVotesComponent', () => {
  let component: CommentsAboutYesVotesComponent;
  let fixture: ComponentFixture<CommentsAboutYesVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsAboutYesVotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsAboutYesVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
