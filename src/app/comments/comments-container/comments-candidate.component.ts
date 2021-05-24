import { Component, OnChanges, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CommentsAndVotesService } from './comments-and-votes.service';

@Component({
    selector: 'comments-candidate',
    templateUrl: './comments-candidate.component.html',
    styleUrls: ['./comments-candidate.component.scss'],
})
export class CommentsCandidateComponent implements OnChanges {
    @ViewChild('boxCommentCollection') private boxCommentCollection!: ElementRef;
    @ViewChild('inputComment') private inputComment!: ElementRef;
    @Input('candidate') candidate: any;

    private commentsAdded: number = 0;
    public commentCollection: Array<any> = [];
    public commentUser: string = '';
    public categoryComment: number = 1; //category comment by default = 1

    constructor(private commentsAndVotesService: CommentsAndVotesService, private renderer: Renderer2) {}

    ngOnChanges() {
        this.getCollectionComment(1); //category comment by default = 1
    }
    getCollectionComment(categoryComment: number | any) {
        this.categoryComment = categoryComment;
        this.commentsAndVotesService.obtainCommentsFromAPI(this.candidate.id, categoryComment).subscribe(
            (response) => {
                this.commentCollection = response;

                if (this.commentsAdded > 0) {
                    this.removeCommentsOfOtherCategory();
                }
            },
            (error) => {
                console.log(error);
            }
        );
        return;
    }
    saveComment() {
        if (this.commentUser.length > 0) {
            this.commentsAndVotesService
                .saveComment(this.commentUser!, this.candidate.id, this.categoryComment)
                .subscribe(
                    (response) => {
                        this.addLastCommentAdded(response);
                        this.cleanInputComment();
                        this.commentsAdded++; //count number of comments added in a specific category
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
        return;
    }
    addLastCommentAdded(dataComment: object | any) {
        const boxComment = this.renderer.createElement('div');
        boxComment.classList.add('comment');

        const userCommentBox = this.renderer.createElement('div');
        userCommentBox.classList.add('content-comment');
        userCommentBox.innerHTML = dataComment.comment.content;

        const contentCommentBox = this.renderer.createElement('div');
        contentCommentBox.innerHTML = dataComment.user.first_name.toUpperCase();

        this.renderer.appendChild(boxComment, contentCommentBox);
        this.renderer.appendChild(boxComment, userCommentBox);
        this.renderer.appendChild(this.boxCommentCollection.nativeElement, boxComment);
        return;
    }
    cleanInputComment() {
        this.inputComment.nativeElement.value = '';
        return;
    }
    removeCommentsOfOtherCategory() {
        const allCommentsRendered = this.boxCommentCollection.nativeElement.children;

        while (this.commentsAdded > 0) {
            const totalCommentsRendered = Object.keys(allCommentsRendered).length;
            const lastCommentAdded = this.boxCommentCollection.nativeElement.children[totalCommentsRendered - 1];

            this.boxCommentCollection.nativeElement.removeChild(lastCommentAdded);
            this.commentsAdded--;
        }
        return;
    }
}


