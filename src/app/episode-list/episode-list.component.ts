import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';
import { FetchEpisodesService } from '../fetch-episodes.service';
import { ApiRicksponse } from '../fetch-episodes.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css'],
})
export class EpisodeListComponent implements OnInit {
  public apiRicksponse: ApiRicksponse;
  public pageNumber: number;

  constructor(private fetchEpisodesService: FetchEpisodesService) {
    this.apiRicksponse = {} as ApiRicksponse;
  }

  getNext() {
    this.fetchEpisodesService
      .getAll(this.apiRicksponse.info.next)
      .subscribe(
        (data) => (
          (this.apiRicksponse.results = data.results),
          (this.apiRicksponse.info = data.info),
          (this.pageNumber = this.fetchEpisodesService.getPageNumber())
        )
      );
  }

  getPrev() {
    this.fetchEpisodesService
      .getAll(this.apiRicksponse.info.prev)
      .subscribe(
        (data) => (
          (this.apiRicksponse.results = data.results),
          (this.apiRicksponse.info = data.info),
          (this.pageNumber = this.fetchEpisodesService.getPageNumber())
        )
      );
  }

  ngOnInit(): void {
    this.fetchEpisodesService
      .getAll('https://rickandmortyapi.com/api/episode')
      .subscribe(
        (data) => (
          (this.apiRicksponse.results = data.results),
          (this.apiRicksponse.info = data.info),
          (this.pageNumber = this.fetchEpisodesService.getPageNumber())
        )
      );
  }
}
