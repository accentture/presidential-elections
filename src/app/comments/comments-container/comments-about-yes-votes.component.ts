import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
    selector: 'comments-about-yes-votes',
    templateUrl: './comments-about-yes-votes.component.html',
    styleUrls: ['./comments-about-yes-votes.component.scss'],
})
export class CommentsAboutYesVotesComponent implements OnInit {
    boxComments!: string;
    constructor(private commentsService: CommentsService) {
        this.boxComments = 'yes';
    }

    ngOnInit(): void {
        this.changeBoxOfComments();
    }
    changeBoxOfComments() {
        this.commentsService.newBoxOfComments$.subscribe((newBox) => {
            console.log(newBox);
            this.boxComments = newBox;
        });
    }
}
