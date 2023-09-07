import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, concatMap } from 'rxjs';
import { ColleagueService } from 'src/services/colleague-service';

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective,
    multi: true
  }]
})
export class PseudoValidatorDirective implements AsyncValidator {
  constructor(private colleagueService: ColleagueService) { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    let valid: any = Observable<null>;

    this.colleagueService.getAllColleagueFromDB().pipe(
      concatMap(colleagues => colleagues)
    ).subscribe(colleague => {
      if (colleague.pseudo === control.value) {
        valid = Observable<ValidationErrors>;
      }
    })

    return valid;
  }
}