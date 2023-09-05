import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingHistoryComponent } from './voting-history/voting-history.component';



@NgModule({
  declarations: [
    VotingHistoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VotingHistoryComponent,
  ]
})
export class VotingModule { }
