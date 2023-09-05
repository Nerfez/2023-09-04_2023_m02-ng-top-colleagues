import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value; //Je suis pas sûr de saisir l'utilité de ce pipe mais j'ai compris ce que représente un pipe et comment le créer
  }

}
