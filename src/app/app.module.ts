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
import { MenuComponent } from './navbar/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PseudoValidatorDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    VotingModule,
    WelcomeModule,
    HttpClientModule,
    MatIconModule,
    CreateColleagueModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
