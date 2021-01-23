import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesContainerComponent } from './candidates-container/candidates-container.component';
import { CandidateListComponent } from './candidates-container/candidate-list.component';
import { CandidateDetailComponent } from './candidates-container/candidate-detail.component';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
    declarations: [CandidatesContainerComponent, CandidateListComponent, CandidateDetailComponent],
    imports: [CommonModule, CommentsModule, CandidatesRoutingModule],
})
export class CandidatesModule {}
