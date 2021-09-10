import { Component, Input, OnInit } from '@angular/core';
import { Episode } from '../episode';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.css'],
})
export class EpisodePageComponent implements OnInit {
  @Input() inputEpisode: Episode;
  testEp: Episode = new Episode();

  constructor() {}

  ngOnInit(): void {
    if (this.inputEpisode) {
      this.testEp = this.inputEpisode;
    }

  }
}
