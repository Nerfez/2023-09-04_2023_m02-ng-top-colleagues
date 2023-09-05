import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/models/colleague';
import { ColleagueService } from 'src/services/colleague-service';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {

  col!: Colleague;

  constructor(private colleagueService: ColleagueService){}

  ngOnInit(){
   this.col =  this.colleagueService.colleague;
  }

}
