import { Component, OnDestroy } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { concatMap } from 'rxjs';
import { VoteService } from 'src/services/vote-service';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnDestroy {

  actionSub: any;
  dislikeNb: number = 0;
  likeNb: number = 0;

  constructor(private voteService: VoteService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/like.svg'));

    iconRegistry.addSvgIcon(
      'thumbs-down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/dislike.svg'));

    this.actionSub = this.voteService.getAllVoteFromDB().pipe(
      concatMap(votes => votes)
    ).subscribe(
      (vote) => {
        if (vote.like_hate === 'LIKE')
          this.dislikeNb++;
        else if (vote.like_hate === 'HATE')
          this.likeNb++;
      });
  }
  ngOnDestroy() {
    this.actionSub.unsubscribe();
  }
}
