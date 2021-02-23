import { Component, OnInit } from '@angular/core';

//app
import { RenderCandidatesService } from './../../candidates/candidates-container/render-candidates.service';
import { CommentsAndVotesService } from './comments-and-votes.service';
import { Candidate } from 'src/app/candidates/candidates-container/candidate.interface';

@Component({
    selector: 'comments-container',
    templateUrl: './comments-container.component.html',
    styleUrls: ['./comments-container.component.scss'],
})
export class CommentsContainerComponent implements OnInit {
    categoryComment: string = 'favorite';
    candidate!: Candidate;

    constructor(
        private commentsAndVotesService: CommentsAndVotesService,
        private renderCandidatesService: RenderCandidatesService
    ) {}
    ngOnInit(): void {
        this.obtainCandidate();
    }
    obtainCandidate() {
        this.renderCandidatesService.renderCandidate$.subscribe((response) => {
            this.candidate = response;
            console.log(this.candidate);
        });
    }
    changeBoxOfComments(nameOfBox: string) {
        this.categoryComment = nameOfBox;
    }
    obtainVote() {
        this.commentsAndVotesService.checkUser(this.candidate['N°']);
    }
}
