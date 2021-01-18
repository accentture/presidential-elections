import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesContainerComponent } from './candidates-container/candidates-container.component';

const routes: Routes = [{ path: 'candidates', component: CandidatesContainerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CandidatesRoutingModule {}
