import { Component, Input } from '@angular/core';
import { Vote } from 'src/models/vote';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  @Input() all_votes!: Vote[];

  constructor() { };

  deleteVote(vote: Vote) {
    const index: number = this.all_votes.indexOf(vote);
    if (index !== -1) {
      this.all_votes.splice(index, 1);
    }
  }

}
