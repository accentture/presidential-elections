import { Component, OnChanges, OnInit, Input, ElementRef } from '@angular/core';
import { CommentsAndVotesService } from './comments-and-votes.service';

@Component({
    selector: 'vote-candidate',
    templateUrl: './vote-candidate.component.html',
    styleUrls: ['./vote-candidate.component.scss'],
})
export class VoteCandidateComponent implements OnInit {
    @Input('candidate') candidate: any;
    constructor(private commentsAndVotesService: CommentsAndVotesService) {}

    ngOnChanges() {
        this.paintHearthWithLastVoteOfUser();
    }
    ngOnInit(): void {}
    obtainVote() {
        this.commentsAndVotesService.checkUser(this.candidate['id']);
        return;
    }
    paintHearthWithLastVoteOfUser() {
        const lastVote = this.commentsAndVotesService.getLastVoteFromLocalStorage();
        const user = this.commentsAndVotesService.getUserFromLocalStorage();

        //checking if a new vote was done after to login
        if (typeof lastVote === 'number') {
            this.paintHearthAdequately(lastVote);
        } else {
            this.paintHearthAdequately(user.user_profile.vote);
        }
    }

    //paint the heart if exists vote for a candidate
    paintHearthAdequately(vote: number) {
        const heart: ElementRef | any = document.getElementById('heart');
        if (this.candidate['id'] == vote) {
            heart.style.fill = '#E2264D'; //exists vote
        } else {
            heart.style.fill = '#aab8c2'; //not exists vote
        }
    }
    paintHearthAfterVote() {
        const heart: ElementRef | any = document.getElementById('heart');
        heart.style.fill = '#E2264D';
    }
}
