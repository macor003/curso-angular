import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-sheach-box',
  standalone: false,

  templateUrl: './sheach-box.component.html',
  styles: ``
})
export class SheachBoxComponent {

  @Input()
  public placeholder: string = 'Buscar...';
}
