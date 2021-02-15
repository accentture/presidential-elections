import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//local
import { UserRegisterComponent } from './core/user-register.component';

const routes: Routes = [{ path: 'registro', component: UserRegisterComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
