import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePage } from 'src/pages/welcome/welcome.page';
import { CreateColleagueFormsComponent } from './pages/components/create-colleague-forms/create-colleague-forms.component';
import { SingleColleagueComponent } from './shared/components/single-colleague/single-colleague.component';
import { CreateColleagueOtherFormComponent } from './pages/components/create-colleague-other-form/create-colleague-other-form.component';
import { LandingComponent } from './auth/landing/landing.component';
import { AuthGuard } from './auth/auth.guards';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'colleagues', component: WelcomePage, canActivate: [AuthGuard] },
  { path: 'colleagues/:pseudo', component: SingleColleagueComponent, canActivate: [AuthGuard] },
  { path: 'form-template', component: CreateColleagueOtherFormComponent, canActivate: [AuthGuard] },
  { path: 'form-reactive', component: CreateColleagueFormsComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }