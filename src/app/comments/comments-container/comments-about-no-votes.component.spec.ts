import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAboutNoVotesComponent } from './comments-about-no-votes.component';

describe('CommentsAboutNoVotesComponent', () => {
  let component: CommentsAboutNoVotesComponent;
  let fixture: ComponentFixture<CommentsAboutNoVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsAboutNoVotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsAboutNoVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
