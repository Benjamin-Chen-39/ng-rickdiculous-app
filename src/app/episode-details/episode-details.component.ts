import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../episode';
import { FetchEpisodesService } from '../fetch-episodes.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css'],
})
export class EpisodeDetailsComponent implements OnInit {
  episode: Episode;
  epId = '';

  constructor(
    private fetchEpisodesService: FetchEpisodesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((data) => {
      this.epId = data.id;
      this.fetchEpisodesService
      .getOneEp(this.epId)
      .subscribe((data) => (this.episode = data));
    });
  }
  ngOnInit(): void {}
}
