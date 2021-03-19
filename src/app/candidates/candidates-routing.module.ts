import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesContainerComponent } from './candidates-container/candidates-container.component';

import { Lazyload1Component } from './candidates-container/lazyload1/lazyload1.component';
import { Lazyload2Component } from './candidates-container/lazyload2/lazyload2.component';

//to add names to routes
//https://stackoverflow.com/questions/53614857/is-there-a-way-to-name-a-route-in-angular-7
export class RouteNames {
    public static routeNamesObject = {};
}

const routes: Routes = [
    {
        path: '', //the parent rounting module will define that routes will be contained here

        //this path hast children paths
        children: [
            //demo
            { path: 'lazyload1', component: Lazyload1Component },
            { path: 'lazyload2', component: Lazyload2Component },

            { path: 'candidates', component: CandidatesContainerComponent },

            //whatever path that redirects to lazyload1 path
            //{ path: '**', redirectTo: 'candidates' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)], //forChild() method is used because the paths of this module are children
    exports: [RouterModule],
})
export class CandidatesRoutingModule {}
