import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesModule } from './candidates/candidates.module';
import { CommentsModule } from './comments/comments.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommentsModule, CandidatesModule, AppRoutingModule ],
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
*/
