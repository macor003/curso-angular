import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  template: `
    <h5>Buscar:</h5>
    <input type ="text" placeholder="Buscar gifs..."
    class="form-control"
    />
  `,
})
export class SearchBoxComponent {

}
