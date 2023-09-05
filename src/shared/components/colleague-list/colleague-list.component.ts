import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/models/colleague';
import { ColleagueService } from 'src/services/colleague-service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  allColleagues!: Colleague[];

  constructor(private colleagueService: ColleagueService){}

  ngOnInit(){
    this.allColleagues =  this.colleagueService.colleague;
   }

   refresh(){
    location.reload(); //petite triche ni vu ni connu (je vais changer ça)
   }

}
