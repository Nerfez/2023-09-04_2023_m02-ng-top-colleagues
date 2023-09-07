import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Colleague } from 'src/models/colleague';
import { ColleagueService } from 'src/services/colleague-service';

@Component({
  selector: 'tc-single-colleague',
  templateUrl: './single-colleague.component.html',
  styleUrls: ['./single-colleague.component.scss']
})
export class SingleColleagueComponent implements OnInit {

  colleagueSpe$!: Observable<Colleague>;

  colleague!: Colleague;

  constructor(private route: ActivatedRoute, private colleagueService: ColleagueService) {
    this.route.params.subscribe((params) => {
      if (params['pseudo']) {
        this.colleagueSpe$ = this.colleagueService.getColleagueFromDBByPseudo(params['pseudo']);
        this.colleagueSpe$.subscribe(e=>{
          this.colleague = e})
      }
    });
   }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
   
}
