import { Component, OnInit } from '@angular/core';
import { Vote } from 'src/models/vote';
import { VoteService } from 'src/services/vote-service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  all_votes!: Vote[];

  constructor(private voteService: VoteService) { };

  ngOnInit(): void {
    this.all_votes = this.voteService.vote;
  }

  deleteVote(vote: Vote) {
    const index: number = this.all_votes.indexOf(vote);
    if (index !== -1) {
      this.all_votes.splice(index, 1);
    }
  }

}
