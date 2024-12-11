import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
  <p>Counter: {{counter}} </p>

  <button (click)="incrementarBy(+1)">+1</button>
  <button (click)="resetCounter()">reset</button>
  <button (click)="incrementarBy(-1)">-1</button>

  `
})
export class CounterComponent {
  public counter: number = 10;

  incrementarBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}