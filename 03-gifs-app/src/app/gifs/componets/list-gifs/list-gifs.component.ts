import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-list-gifs',
  standalone: false,

  templateUrl: './list-gifs.component.html'
})
export class ListGifsComponent {

  @Input()
  public gifs: Gif[] = [];
}
