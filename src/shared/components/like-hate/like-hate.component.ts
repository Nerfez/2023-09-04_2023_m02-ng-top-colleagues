import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colleague } from 'src/models/colleague';
import { LikeHate } from 'src/models/like-hate';

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

  ngOnInit(): void {
    this.like = LikeHate.LIKE;
    this.hate = LikeHate.HATE;
  }

  evtLiking(like: LikeHate) {
    if (like === LikeHate.LIKE) {
      this.change.emit('like');
      //this.colleague.score += 100;
    } else if (like === LikeHate.HATE) {
      this.change.emit('hate');
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