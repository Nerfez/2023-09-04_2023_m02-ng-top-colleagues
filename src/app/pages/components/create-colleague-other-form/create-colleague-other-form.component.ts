import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Colleague } from 'src/models/colleague';
import { ColleagueService } from 'src/services/colleague-service';

@Component({
  selector: 'tc-create-colleague-other-form',
  templateUrl: './create-colleague-other-form.component.html',
  styleUrls: ['./create-colleague-other-form.component.scss']
})
export class CreateColleagueOtherFormComponent {

  @ViewChild("pseudo") pseudo!: ElementRef;
  @ViewChild("first") first!: ElementRef;
  @ViewChild("last") last!: ElementRef;
  @ViewChild("score") score!: ElementRef;
  @ViewChild("url") url!: ElementRef;

  constructor(private colleagueService: ColleagueService, private route: Router){}

  afficherButton(){
    if(this.pseudo.nativeElement.value && this.first.nativeElement.value && this.last.nativeElement.value && this.score.nativeElement.value && this.url.nativeElement.value){
      return true;
    } else {
      return false;
    }
  }

  ajouter(){
    let colleague: Colleague = {
      pseudo: this.pseudo.nativeElement.value,
      score: this.score.nativeElement.value,
      last: this.last.nativeElement.value,
      first: this.url.nativeElement.value,
      photo: this.score.nativeElement.value,
    }
    this.colleagueService.addColleagueFromDB(colleague).subscribe(new_col => {
      this.route.navigateByUrl('');
    });
  }
}
