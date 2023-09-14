import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class CompteurService {
  // TODO ajouter un attribut "nombre"
  private nombre = 1;
  constructor() { }
  // TODO ajouter une méthode "incrementer"
  incrementer(): number {
    return this.nombre++;
  }
}