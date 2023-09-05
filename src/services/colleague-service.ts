import { Injectable } from '@angular/core';
import { Colleague } from 'src/models/colleague';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  colleague: Colleague = {
    score: 100,
    photo: 'https://i.pinimg.com/736x/02/df/12/02df120ca27f1b4e5109ef0f7e3e2865.jpg',
    pseudo: "Clement"
  };

  constructor() { }

}