import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//local
import { UserRegisterComponent } from './core/user-register.component';
import { UserLoginComponent } from './core/user-login.component';

const routes: Routes = [
    { path: '', component: UserLoginComponent },
    { path: 'iniciar-sesion', component: UserLoginComponent },
    { path: 'registro', component: UserRegisterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
