import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

//services
import { RenderCandidatesService } from './../../candidates/candidates-container/render-candidates.service';
import { CommentsAndVotesService } from './comments-and-votes.service';
import { Candidate } from 'src/app/candidates/candidates-container/candidate.interface';

@Component({
    selector: 'comments-container',
    templateUrl: './comments-container.component.html',
    styleUrls: ['./comments-container.component.scss'],
})
export class CommentsContainerComponent implements OnInit, AfterViewInit {
    @ViewChild('commentsCandidate', { static: false }) commentsCandidate!: ElementRef; //to solve problem between ngIf and template reference variable

    categoryComment: number = 1;
    candidate!: Candidate;
    lastCategoryBox!: ElementRef | any;

    constructor(
        private commentsAndVotesService: CommentsAndVotesService,
        private renderCandidatesService: RenderCandidatesService
    ) {}
    ngOnInit(): void {}
    ngAfterViewInit() {
        this.obtainCandidate();
    }
    obtainCandidate() {
        this.renderCandidatesService.renderCandidate$.subscribe((response) => {
            this.candidate = response;
            this.paintBoxCategory();
        });
        return;
    }
    obtainVote() {
        this.commentsAndVotesService.checkUser(this.candidate['id']);
    }
    paintBoxCategory(event?: any) {
        if (this.lastCategoryBox) {
            this.lastCategoryBox.classList.remove('currentCategory');
        }

        //if click is used
        if (event) {
            this.lastCategoryBox = event.target;
        } else {
            this.paintBoxCategoryByDefaut();
        }
        this.lastCategoryBox.classList.add('currentCategory');
    }
    paintBoxCategoryByDefaut() {
        this.lastCategoryBox = document.querySelector('.boxCategoryByDefaut');
    }
}
