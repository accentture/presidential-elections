import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CommentsService {
    private boxOfCommentsControl = new Subject<string>();
    newBoxOfComments$ = this.boxOfCommentsControl.asObservable();

    constructor() {}
    otherBoxOfComments(nameOfBox: string) {
        this.boxOfCommentsControl.next(nameOfBox);
    }
}
