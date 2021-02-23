import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'comments-favorite',
    templateUrl: './comments-favorite.component.html',
    styleUrls: ['./comments-favorite.component.scss'],
})
export class CommentsFavoriteComponent implements OnInit {
    boxComments!: string;
    constructor() {}

    ngOnInit(): void {}
}
