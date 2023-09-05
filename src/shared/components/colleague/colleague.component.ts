import { Component, Input, OnInit } from '@angular/core';
import { Colleague } from 'src/models/colleague';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {

  @Input() colleague!: Colleague;

  constructor() { }

  ngOnInit() {
  }

  traiter(val: string) {
    if (val === 'like')
      this.colleague.score += 100;
    else if (val === 'hate') {
      this.colleague.score -= 100;
    }
  }

}
