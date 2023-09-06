import { Injectable } from '@angular/core';
import { Vote } from 'src/models/vote';
import { ColleagueService } from './colleague-service';
import { LikeHate } from 'src/models/like-hate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private colleagueService: ColleagueService, private http: HttpClient) { }

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

  delete(vote: Vote) {
    const index: number = this.vote.indexOf(vote);
    if (index !== -1) {
      this.vote.splice(index, 1);
    }
  }

  getAllVoteFromDB(): Observable<Vote[]> {
    return this.http.get<Vote[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes');
  }

  addVoteFromDB(vote: Vote): Observable<Vote[]> {
    return this.http.post<Vote[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes', vote);
  }

  // J'utilise pas la méthode pour pas compromettre les données dans la bdd
  deleteVoteFromDB(vote: Vote) {
    this.http.delete('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes/'+vote)
      .subscribe({
        next: data => {
          console.log('Suppression OK');
        },
        error: error => {
          console.error('Erreur :', error);
        }
      });
  }

}