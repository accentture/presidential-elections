import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //ti module allows to use ngIf, ngFor, pipes
import { FormsModule } from '@angular/forms';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsContainerComponent } from './comments-container/comments-container.component';
import { CommentsCandidateComponent } from './comments-container/comments-candidate.component';

@NgModule({
    declarations: [CommentsContainerComponent, CommentsCandidateComponent],
    imports: [FormsModule, CommonModule, CommentsRoutingModule],
    exports: [CommentsContainerComponent],
})
export class CommentsModule {}
