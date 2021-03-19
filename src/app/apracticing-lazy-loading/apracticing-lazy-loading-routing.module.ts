import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'first', component: FirstComponent },
            { path: 'second', component: SecondComponent },
            { path: 'third', component: ThirdComponent },
            //{ path: '**', redirectTo: 'second' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ApracticingLazyLoadingRoutingModule {}
