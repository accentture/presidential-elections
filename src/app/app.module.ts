import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';


import { CandidatesModule } from './candidates/candidates.module';
import { CommentsModule } from './comments/comments.module';
import { ApracticingLazyLoadingModule } from './apracticing-lazy-loading/apracticing-lazy-loading.module';

import { UserRegisterComponent } from './core/user-register.component';
import { UserLoginComponent } from './core/user-login.component';
import { UserLogoutComponent } from './core/user-logout.component';

@NgModule({
  declarations: [AppComponent, UserRegisterComponent, UserLoginComponent, UserLogoutComponent],

  //all the Modules is added in the array of import
  imports: [BrowserModule, FormsModule, HttpClientModule, CommentsModule, CandidatesModule, ApracticingLazyLoadingModule, AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/* 
    prettier options :  https://prettier.io/docs/en/options.html#print-width 
*/

/* 
    
    folder structure in angular: https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7

    to generate models in angular https://www.codegrepper.com/code-examples/typescript/generate+model+in+angular

    --to compilate more faster : https://betterprogramming.pub/how-to-speed-up-angular-development-and-reduce-compilation-times-a32262d478bc
*/
//npm run nghm -- serve