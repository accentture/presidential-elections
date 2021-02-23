import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsContainerComponent } from './comments-container/comments-container.component';
import { CommentsFavoriteComponent } from './comments-container/comments-favorite.component';
import { CommentsNoFavoriteComponent } from './comments-container/comments-no-favorite.component';
import { CommentsAboutGovernmentComponent } from './comments-container/comments-about-government.component';

@NgModule({
    declarations: [
        CommentsContainerComponent,
        CommentsFavoriteComponent,
        CommentsNoFavoriteComponent,
        CommentsAboutGovernmentComponent,
    ],
    imports: [CommonModule, CommentsRoutingModule],
    exports: [CommentsContainerComponent],
})
export class CommentsModule {}
