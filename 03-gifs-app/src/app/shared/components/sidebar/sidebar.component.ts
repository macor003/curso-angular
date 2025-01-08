import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: false,
})
export class SidebarComponent {

  constructor( private gifsService : GifsService){}

  get tags(): string[] {
    console.log('sidebar');
    return this.gifsService.tagsHistory;
  }

}
