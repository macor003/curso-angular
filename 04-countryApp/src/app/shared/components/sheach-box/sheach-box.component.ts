import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-sheach-box',
  standalone: false,

  templateUrl: './sheach-box.component.html',
  styles: ``
})
export class SheachBoxComponent {

  @Input()
  public placeholder: string = 'Buscar...';

  @Output()
  public onValue = new EventEmitter<string>();

  emitEvent(value: any): void {
    this.onValue.emit(value);
  }

}
