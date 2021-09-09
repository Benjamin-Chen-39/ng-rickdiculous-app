import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../episode';
import { FetchEpisodesService } from '../fetch-episodes.service';
import { FetchCharacterService } from '../fetch-character.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Character } from '../character';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css'],
})
export class EpisodeDetailsComponent implements OnInit {
  episode: Episode = null;
  characters: Character[];

  constructor(
    private fetchEpisodesService: FetchEpisodesService,
    private fetchCharacterService: FetchCharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.episode = this.fetchEpisodesService.getOne(data.id);
    });
  }
}
