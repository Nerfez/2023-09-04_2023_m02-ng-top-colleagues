import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePage } from 'src/pages/welcome/welcome.page';
import { CreateColleagueFormsComponent } from './pages/components/create-colleague-forms/create-colleague-forms.component';
import { SingleColleagueComponent } from './shared/components/single-colleague/single-colleague.component';

const routes: Routes = [
  { path: '', component: WelcomePage },
  { path: 'colleagues', component: WelcomePage },
  { path: 'colleagues/:pseudo', component: SingleColleagueComponent },
  { path: 'form-template', component: CreateColleagueFormsComponent },
  { path: 'form-reactive', component: CreateColleagueFormsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }