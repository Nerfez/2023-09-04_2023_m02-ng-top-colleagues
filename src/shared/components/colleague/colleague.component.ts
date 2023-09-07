import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Colleague } from 'src/models/colleague';
import { ColleagueService } from 'src/services/colleague-service';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {

  @Input() colleague!: Colleague;

  constructor() {}

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
