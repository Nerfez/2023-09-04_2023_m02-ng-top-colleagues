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
  },
  {
    colleague: this.colleagueService.colleague[6],
    vote: LikeHate.LIKE
  },
  {
    colleague: this.colleagueService.colleague[7],
    vote: LikeHate.LIKE
  }
  ];

  constructor(private colleagueService: ColleagueService) { }

  refresh() {
    this.vote = [{
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
    },
    {
      colleague: this.colleagueService.colleague[6],
      vote: LikeHate.LIKE
    },
    {
      colleague: this.colleagueService.colleague[7],
      vote: LikeHate.LIKE
    }
    ];
  }

  ajouter(vote: Vote) {
    this.vote.push(vote);
  }

  delete(vote: Vote){
    const index: number = this.vote.indexOf(vote);
    if (index !== -1) {
      this.vote.splice(index, 1);
    }
  }

}