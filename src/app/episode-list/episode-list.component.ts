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


  constructor(private fetchEpisodesService: FetchEpisodesService) {}

  ngOnInit(): void {
    this.fetchEpisodesService
      .getAll()
      .subscribe(
        (data) => (
          (this.episodeList = data.results),

          (this.apiRicksponse.info = data.info)
        )
      );
  }
}
