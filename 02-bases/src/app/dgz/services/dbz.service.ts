import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { name: 'Goku', power: 9500 },
    { name: 'Vegetta', power: 7500 },
    { name: 'Krillin', power: 1000 },
    { name: 'Trunks', power: 100 }
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
    console.log(character);
    console.log(this.characters);

  }

  onDeleteEvent(index: number): void {
    console.log("Main page Component");
    console.log(index);
    this.characters.splice(index, 1);
  }
}
