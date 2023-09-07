import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective,
    multi: true
  }]
})
export class FirstLastValidatorDirective implements Validator {
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value.nom != control.value.prenom) { return null }
    else { return { firstLast: 'first name must be different from last name' } }
  }
}