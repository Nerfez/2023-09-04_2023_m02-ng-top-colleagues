import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Colleague } from 'src/models/colleague';
import { LikeHate } from 'src/models/like-hate';
import { Vote } from 'src/models/vote';
import { ColleagueService } from 'src/services/colleague-service';
import { VoteService } from 'src/services/vote-service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  //@Input() all_votes$!: Observable<Vote[]>;
  @Input() all_votes!: Vote[];

  constructor(private voteService: VoteService, private colleagueService: ColleagueService) { };

  deleteVote(vote: Vote) {
    this.voteService.delete(vote);
  }

  addVote(){
    let new_vote: Vote = {
        colleague: this.colleagueService.colleague[0],
        vote:LikeHate.LIKE
      }
    this.voteService.addVoteFromDB(new_vote);
  }

}
