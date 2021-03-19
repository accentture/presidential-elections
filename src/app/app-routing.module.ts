import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//local
import { UserRegisterComponent } from './core/user-register.component';
import { UserLoginComponent } from './core/user-login.component';

const routes: Routes = [
    { path: '', component: UserLoginComponent },
    { path: 'iniciar-sesion', component: UserLoginComponent },
    { path: 'registro', component: UserRegisterComponent },

    //to lazy load
    {
        path: 'cargaPerezosa', //this import return a promise
        loadChildren: () => import('./candidates/candidates.module').then((m) => m.CandidatesModule),
    },
    {
        path: 'pathLoadLazy', //this import return a promise
        loadChildren: () =>
            import('./apracticing-lazy-loading/apracticing-lazy-loading.module').then(
                (m) => m.ApracticingLazyLoadingModule
            ),
    },
    { path: '**', redirectTo: 'iniciar-sesion' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], //forRoot defines main Routes of the application
    exports: [RouterModule],
})
export class AppRoutingModule {}
