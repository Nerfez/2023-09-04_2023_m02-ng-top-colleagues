import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/models/colleague';
import { Vote } from 'src/models/vote';
import { ColleagueService } from 'src/services/colleague-service';
import { VoteService } from 'src/services/vote-service';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {

  allColleagues!: Colleague[];
  all_votes!: Vote[];

  constructor(private voteService: VoteService, private colleagueService: ColleagueService) { }

  ngOnInit(): void {
    this.allColleagues = this.colleagueService.colleague;
    this.all_votes = this.voteService.vote;
  }

  refresh() {
    this.colleagueService.refresh();
    this.allColleagues = this.colleagueService.colleague;
    this.voteService.refresh();
    this.all_votes = this.voteService.vote;
  }

}
