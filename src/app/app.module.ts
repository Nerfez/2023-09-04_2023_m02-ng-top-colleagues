import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/shared/shared.module';
import { VotingModule } from 'src/Voting/voting.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    VotingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
