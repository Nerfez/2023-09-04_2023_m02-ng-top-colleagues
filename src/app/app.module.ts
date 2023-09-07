import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/shared/shared.module';
import { VotingModule } from 'src/Voting/voting.module';
import { WelcomeModule } from 'src/pages/welcome/welcome.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CreateColleagueModule } from './pages/create-colleague.module';
import { PseudoValidatorDirective } from './shared/validators/pseudo-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    PseudoValidatorDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    VotingModule,
    WelcomeModule,
    HttpClientModule,
    MatIconModule,
    CreateColleagueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
