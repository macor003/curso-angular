import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteEvent: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    //console.log(index);
    this.onDeleteEvent.emit(index);
    //this.characterList.splice(index,1);
  }
}
