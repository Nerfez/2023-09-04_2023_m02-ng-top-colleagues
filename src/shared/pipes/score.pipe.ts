import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let valeurFinal: unknown;
    if (value as number > 0)
      valeurFinal = "+" + value;
    else if (value as number === 0 || value as number < 0)
      valeurFinal = value;
    return valeurFinal;
  }

}
