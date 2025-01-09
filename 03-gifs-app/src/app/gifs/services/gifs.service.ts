import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gif[] = [];

  private _tagHistory: string[] = [];
  private apiKey: string = 'OjzQ7PkB7BUtvMcATxKVxq4Gu8nvAtxB';
  private url: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(t => t !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage() {
    const history = localStorage.getItem('history');
    if (history) {
      this._tagHistory = JSON.parse(history);
      this.searchTag(this._tagHistory[0]);
    }
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http.get<SearchResponse>(`${this.url}/search`, { params })
      .subscribe(response => {

        this.gifsList = response.data;
        console.log({gifs: this.gifsList});

      })
  }

}
