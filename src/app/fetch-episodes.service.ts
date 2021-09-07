import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Episode } from './episode';
import { HttpClient } from '@angular/common/http';

export interface ApiRicksponse {
  info?: {};
  results: Episode[];
}

@Injectable({
  providedIn: 'root',
})
export class FetchEpisodesService {
  public episodeList: Episode[] = [];
  public info: {};

  public epApiUrl = 'https://rickandmortyapi.com/api/episode';

  getAll(apiUrl: string): Observable<ApiRicksponse> {
    this.epApiUrl = apiUrl;
    return this.http.get<any>(this.epApiUrl).pipe(
      tap((data) => {
        this.episodeList = data.results;
        this.info = data.info;
      })
    );
  }

  constructor(private http: HttpClient) {}
}
