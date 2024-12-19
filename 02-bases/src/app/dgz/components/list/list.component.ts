import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[];

  onDeleteCharacter(index: number):void{
    console.log(index);
    this.characterList.splice(index,1);
  }
}
