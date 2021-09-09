import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Location } from './location';

export interface ApiRicksponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Location[];
}

@Injectable({
  providedIn: 'root',
})
export class FetchLocationService {
  public apiRicksponse = {} as ApiRicksponse;
  public locApiUrl = 'https://rickandmortyapi.com/api/location';

  getAll(): Observable<ApiRicksponse> {
    return this.http.get<any>(this.locApiUrl).pipe(
      tap((data) => {
        this.apiRicksponse.results = data.results;
        this.apiRicksponse.info = data.info;
      })
    );
  }

  constructor(private http: HttpClient) {}
}
