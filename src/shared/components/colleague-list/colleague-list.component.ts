import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Colleague } from 'src/models/colleague';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {

  @Input() allColleagues$!: Observable<Colleague[]>;

  constructor(){}

}
