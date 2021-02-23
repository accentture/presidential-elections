import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsNoFavoriteComponent } from './comments-no-favorite.component';

describe('CommentsAboutNoVotesComponent', () => {
    let component: CommentsNoFavoriteComponent;
    let fixture: ComponentFixture<CommentsNoFavoriteComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CommentsNoFavoriteComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentsNoFavoriteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
