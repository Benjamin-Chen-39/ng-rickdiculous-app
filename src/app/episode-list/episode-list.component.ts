import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';
import { FetchEpisodesService } from '../fetch-episodes.service';
import { ApiRicksponse } from '../fetch-episodes.service';

// export interface ApiRicksponse{
//   info?: {};
//   results: Episode[];
// }

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css'],
})
export class EpisodeListComponent implements OnInit {
  public episodeList: Episode[] = [];
  public apiRicksponse: ApiRicksponse;
  public nextUrl;

  constructor(private fetchEpisodesService: FetchEpisodesService) {
    this.apiRicksponse = {} as ApiRicksponse;
  }

  getNext() {
    this.fetchEpisodesService.getAll(this.apiRicksponse.info.next)
      .subscribe(
        (data) => (
          (this.episodeList = data.results),
          (this.apiRicksponse.info = data.info)
        )
      );
  }

  ngOnInit(): void {
    this.fetchEpisodesService
      .getAll('https://rickandmortyapi.com/api/episode')
      .subscribe(
        (data) => (
          (this.episodeList = data.results),
          (this.apiRicksponse.info = data.info)
          // (this.nextUrl = data.info.next)
        )
      );
  }
}
