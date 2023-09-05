import { Injectable } from '@angular/core';
import { Vote } from 'src/models/vote';
import { ColleagueService } from './colleague-service';
import { LikeHate } from 'src/models/like-hate';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  vote: Vote[] = [{
    colleague: this.colleagueService.colleague[0],
    vote: LikeHate.LIKE
  },
  {
    colleague: this.colleagueService.colleague[1],
    vote: LikeHate.LIKE
  },
  {
    colleague: this.colleagueService.colleague[2],
    vote: LikeHate.LIKE
  },
  {
    colleague: this.colleagueService.colleague[3],
    vote: LikeHate.LIKE
  },
  {
    colleague: this.colleagueService.colleague[4],
    vote: LikeHate.LIKE
  },
  {
    colleague: this.colleagueService.colleague[5],
    vote: LikeHate.LIKE
  }
  ];

  constructor(private colleagueService: ColleagueService) { }

}