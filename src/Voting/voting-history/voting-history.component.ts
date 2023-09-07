import { Component, Input, OnInit } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
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
export class VotingHistoryComponent implements OnInit{

  @Input() all_votes$!: Observable<Vote[]>;
  //@Input() all_votes!: Vote[];

  pseudoAll!: string[];

  constructor(private voteService: VoteService, private colleagueService: ColleagueService) { }
  
  ngOnInit(): void {
    this.pseudoAll = new Array;
    this.colleagueService.getAllColleagueFromDB().pipe(
      concatMap(colleagues => colleagues)
    ).subscribe(colleague => {
      this.pseudoAll.push(colleague.pseudo);
    });
  }
;

  deleteVote(new_vote: Vote) {
    let index: number = 0;
    let trueIndex: number = 0;
    this.voteService.getAllVoteFromDB().pipe(
      concatMap(votes => votes)
    ).subscribe(vote => {
      index++;
      if (new_vote.like_hate === vote.like_hate && new_vote.colleague.first === vote.colleague.first
        && new_vote.colleague.last === vote.colleague.last && new_vote.colleague.pseudo === vote.colleague.pseudo) {
        trueIndex = index;
      }
      //10 a rendre dynamique plus tard
      if (index === 10) {
        //this.voteService.deleteVoteFromDB(trueIndex);
      }
    });
  }

  addVote() {
    const randomPseudo = Math.floor(Math.random() * this.pseudoAll.length);
    let like_hate!: LikeHate.LIKE | LikeHate.HATE;
    if(randomPseudo <= 5){
      like_hate = LikeHate.HATE;
    } else {
      like_hate = LikeHate.LIKE;
    }
    let new_vote: any = {
      pseudo: this.pseudoAll[randomPseudo],
      like_hate: like_hate
    }
    this.voteService.addVoteFromDB(new_vote).subscribe(new_vote => {
      location.reload();
    });
  }

}
