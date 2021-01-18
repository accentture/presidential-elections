import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesContainerComponent } from './candidates-container/candidates-container.component';
import { CandidateListComponent } from './candidates-container/candidate-list.component';

@NgModule({
    declarations: [CandidatesContainerComponent, CandidateListComponent],
    imports: [CommonModule, CandidatesRoutingModule],
})
export class CandidatesModule {}
