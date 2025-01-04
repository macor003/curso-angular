import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dgz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})
export class MainPageComponent {

  constructor(private dbzService : DbzService){}

  get characters(){
    return[...this.dbzService.characters];
  }

  onDeleteCharacter(id: string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onAddCharacter(character : Character):void{
    this.dbzService.addCharacter(character);
  }

}
