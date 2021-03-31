import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCandidateComponent } from './vote-candidate.component';

describe('FavoriteCandidateComponent', () => {
    let component: VoteCandidateComponent;
    let fixture: ComponentFixture<VoteCandidateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VoteCandidateComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VoteCandidateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
