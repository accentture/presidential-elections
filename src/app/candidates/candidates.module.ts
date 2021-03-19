import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesContainerComponent } from './candidates-container/candidates-container.component';
import { CandidateListComponent } from './candidates-container/candidate-list.component';
import { CandidateDetailComponent } from './candidates-container/candidate-detail.component';
import { CommentsModule } from '../comments/comments.module';
import { HttpClientModule } from '@angular/common/http';
import { Lazyload1Component } from './candidates-container/lazyload1/lazyload1.component';
import { Lazyload2Component } from './candidates-container/lazyload2/lazyload2.component';

@NgModule({
    declarations: [
        CandidatesContainerComponent,
        CandidateListComponent,
        CandidateDetailComponent,
        Lazyload1Component,
        Lazyload2Component,
    ],
    imports: [CommonModule, CommentsModule, CandidatesRoutingModule, HttpClientModule],
})
export class CandidatesModule {}
