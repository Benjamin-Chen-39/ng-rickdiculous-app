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
  public pageNumber: number;

  constructor(private fetchEpisodesService: FetchEpisodesService) {}

  getTotalPages() {
    return this.fetchEpisodesService.pages;
  }

  getAllEps() {
    return this.fetchEpisodesService.apiRicksponse.results;
  }

  getNext() {
    this.fetchEpisodesService
      .getAll(this.fetchEpisodesService.apiRicksponse.info.next)
      .subscribe(
        (data) => (this.pageNumber = this.fetchEpisodesService.getPageNumber())
      );
  }

  getPrev() {
    this.fetchEpisodesService
      .getAll(this.fetchEpisodesService.apiRicksponse.info.prev)
      .subscribe(
        (data) => (this.pageNumber = this.fetchEpisodesService.getPageNumber())
      );
  }

  ngOnInit(): void {
    this.fetchEpisodesService
      .getAll('https://rickandmortyapi.com/api/episode')
      .subscribe((data) => {
        this.pageNumber = this.fetchEpisodesService.getPageNumber();
      });
  }
}
