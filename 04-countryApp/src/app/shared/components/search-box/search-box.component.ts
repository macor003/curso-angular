import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-sheach-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styles: ``
})
export class SheachBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();

  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = 'Buscar...';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(debounceTime(300))
    .subscribe(value =>
      this.onDebounce.emit(value)
    )
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

}
