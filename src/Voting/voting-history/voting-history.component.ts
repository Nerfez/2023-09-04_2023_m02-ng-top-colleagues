import { Component, Input } from '@angular/core';
import { Vote } from 'src/models/vote';
import { VoteService } from 'src/services/vote-service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  @Input() all_votes!: Vote[];

  constructor(private voteService: VoteService) { };

  deleteVote(vote: Vote) {
    this.voteService.delete(vote);
  }

}
