import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {
  public title: string = 'Hola Mundo!';
  public counter: number = 10;

  incrementarBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
