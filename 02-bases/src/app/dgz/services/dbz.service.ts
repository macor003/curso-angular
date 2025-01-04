import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegetta', power: 7500 },
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Trunks', power: 100 }
  ];

  onNewCharacter(character: Character): void {

    const newCharacter : Character = {id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  onDeleteEvent(index: number): void {
    console.log("Main page Component");
    console.log(index);
    this.characters.splice(index, 1);
  }
}
