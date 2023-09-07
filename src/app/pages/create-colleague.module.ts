import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleaguePage } from './components/create-colleague/create-colleague.page';
import { CreateColleagueFormsComponent } from './components/create-colleague-forms/create-colleague-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateColleagueOtherFormComponent } from './components/create-colleague-other-form/create-colleague-other-form.component';


@NgModule({
  declarations: [
    CreateColleaguePage,
    CreateColleagueFormsComponent,
    CreateColleagueOtherFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CreateColleaguePage,
    CreateColleagueFormsComponent
  ]
})
export class CreateColleagueModule { }
