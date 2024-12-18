import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  standalone: false
})
export class AddCharacterComponent {

  public character: Character = {
    name: 'Trunks',
    power: 10
  };

  emitCharacter(): void{
  console.log(this.character);
  };
 }
