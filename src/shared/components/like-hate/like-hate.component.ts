import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colleague } from 'src/models/colleague';
import { LikeHate } from 'src/models/like-hate';
import { Vote } from 'src/models/vote';
import { VoteService } from 'src/services/vote-service';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {

  @Input() colleague!: Colleague;
  @Output() change:EventEmitter<string> = new EventEmitter<string>();

  like!: LikeHate.LIKE;
  hate!: LikeHate.HATE;

  constructor(private voteService: VoteService){}

  ngOnInit(): void {
    this.like = LikeHate.LIKE;
    this.hate = LikeHate.HATE;
  }

  evtLiking(like: LikeHate) {
    if (like === LikeHate.LIKE) {
      this.change.emit('like');
      let new_vote: any = {
        pseudo: this.colleague.pseudo,
        like_hate: LikeHate.LIKE
      }
      this.voteService.addVoteFromDB(new_vote).subscribe(new_vote => {
        location.reload(); //il faudra refresh plutot
      })
      //this.colleague.score += 100;
    } else if (like === LikeHate.HATE) {
      this.change.emit('hate');
      let new_vote: any = {
        pseudo: this.colleague.pseudo,
        like_hate: LikeHate.HATE
      }
      this.voteService.addVoteFromDB(new_vote).subscribe(new_vote => {
        location.reload(); //il faudra refresh plutot
      })
      //this.colleague.score -= 100;
    }
  }

  isScoreUp() {
    return !(this.colleague.score > 1000);
  }

  isScoreDown() {
    return !(this.colleague.score < -1000);
  }
}
