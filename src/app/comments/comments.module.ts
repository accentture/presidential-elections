import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsContainerComponent } from './comments-container/comments-container.component';
import { CommentsAboutYesVotesComponent } from './comments-container/comments-about-yes-votes.component';
import { CommentsAboutNoVotesComponent } from './comments-container/comments-about-no-votes.component';
import { CommentsAboutGovernmentComponent } from './comments-container/comments-about-government.component';

@NgModule({
    declarations: [CommentsContainerComponent, CommentsAboutYesVotesComponent, CommentsAboutNoVotesComponent, CommentsAboutGovernmentComponent],
    imports: [CommonModule, CommentsRoutingModule],
    exports: [CommentsContainerComponent],
})
export class CommentsModule {}
