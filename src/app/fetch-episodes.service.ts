import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Episode } from './episode';
import { HttpClient } from '@angular/common/http';

export interface ApiRicksponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Episode[];
}

@Injectable({
  providedIn: 'root',
})
export class FetchEpisodesService {
  // public episodeList: Episode[] = [];
  // public info: {};
  public apiRicksponse = {} as ApiRicksponse;
  public epApiUrl = 'https://rickandmortyapi.com/api/episode';

  getAll(apiUrl: string): Observable<ApiRicksponse> {
    this.epApiUrl = apiUrl;
    return this.http.get<any>(this.epApiUrl).pipe(
      tap((data) => {
        this.apiRicksponse.results = data.results;
        this.apiRicksponse.info = data.info;
      })
    );
  }

  constructor(private http: HttpClient) {}
}
