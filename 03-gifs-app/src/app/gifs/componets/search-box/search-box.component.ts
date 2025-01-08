import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  template: `
    <h5>Buscar:</h5>
    <input type ="text" placeholder="Buscar gifs..."
    class="form-control"
    (keyup.enter)="searchTag()"
    #searchBox
    />
  `,
})
export class SearchBoxComponent {

  @ViewChild('searchBox')
  public searchBoxInput!: ElementRef<HTMLInputElement>;

  searchTag() {
    const value = this.searchBoxInput.nativeElement.value
    console.log({ value });
  }
}
