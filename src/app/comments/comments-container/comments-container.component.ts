import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
    selector: 'comments-container',
    templateUrl: './comments-container.component.html',
    styleUrls: ['./comments-container.component.scss'],
})
export class CommentsContainerComponent implements OnInit {
    constructor(private commentsService: CommentsService) {}

    ngOnInit(): void {}

    otherBoxOfComments(nameOfBox: string) {
        this.commentsService.otherBoxOfComments(nameOfBox);
    }
}
