import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsFavoriteComponent } from './comments-favorite.component';

describe('CommentsAboutYesVotesComponent', () => {
    let component: CommentsFavoriteComponent;
    let fixture: ComponentFixture<CommentsFavoriteComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CommentsFavoriteComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentsFavoriteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
