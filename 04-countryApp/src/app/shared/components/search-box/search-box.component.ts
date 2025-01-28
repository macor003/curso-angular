import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-sheach-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styles: ``
})
export class SheachBoxComponent implements OnInit {

  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = 'Buscar...';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value =>
        this.onDebounce.emit(value)
      )
  }

  emitEvent(value: any): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

}
