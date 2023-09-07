import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { ScorePipe } from '../shared/pipes/score.pipe';
import { CounterComponent } from './components/counter/counter.component';
import {MatIconModule} from '@angular/material/icon';
import { SingleColleagueComponent } from 'src/app/shared/components/single-colleague/single-colleague.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    CounterComponent,
    SingleColleagueComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule 
  ],
  exports:[
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    CounterComponent,
    SingleColleagueComponent
  ]
})
export class SharedModule { }
