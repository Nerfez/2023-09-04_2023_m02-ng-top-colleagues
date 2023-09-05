import { Component, Input, OnInit } from '@angular/core';
import { Colleague } from 'src/models/colleague';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {

  @Input() colleague!: Colleague;


  constructor(){}

  ngOnInit(){
    console.log("colleaguel: ", this.colleague)
  }

}
