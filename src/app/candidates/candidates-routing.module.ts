import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesContainerComponent } from './candidates-container/candidates-container.component';

//to add names to routes
//https://stackoverflow.com/questions/53614857/is-there-a-way-to-name-a-route-in-angular-7
export class RouteNames {
    public static routeNamesObject = {};
}

const routes: Routes = [{ path: 'candidates', component: CandidatesContainerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CandidatesRoutingModule {}
