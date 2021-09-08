import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../episode';
import { FetchEpisodesService } from '../fetch-episodes.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css'],
})
export class EpisodeDetailsComponent implements OnInit {
  @Input() public myEpisode: Episode;

  constructor(private fetchEpisodesService: FetchEpisodesService) {}

  ngOnInit(): void {}
}
