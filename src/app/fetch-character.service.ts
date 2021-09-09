import { Injectable } from '@angular/core';
import { Character } from './character';
import { Observable, of, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchCharacterService {
  characters: Character;

  getCharData(charUrl: string): Observable<Character> {
    return this.http.get<any>(charUrl);
  }


  constructor(private http: HttpClient) {}
}
