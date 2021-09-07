import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';

@Component({
  selector: 'app-episode-display',
  templateUrl: './episode-display.component.html',
  styleUrls: ['./episode-display.component.css']
})
export class EpisodeDisplayComponent implements OnInit {
  public displayedEpisode = new Episode;
  //will just display episode info
  constructor() { }

  ngOnInit(): void {
  }

}
