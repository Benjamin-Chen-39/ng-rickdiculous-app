import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EpisodeDetailsComponent } from './episode-details.component';
import { FetchEpisodesService } from '../fetch-episodes.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

const apiResponse: {} = {
  name: 'Testor-Morty',
  episode: 'TEST02',
  id: 123,
  airDate: 'May 1, 2014',
  characters: [],
};

describe('EpisodeDetailsComponent', () => {
  let component: EpisodeDetailsComponent;
  let fixture: ComponentFixture<EpisodeDetailsComponent>;
  let router: Router;
  let location: Location;

  ////////////
  let service: FetchEpisodesService;
  let httpClient: HttpClient;
  let httpTestController: HttpTestingController;
  ////////////

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      /////
      imports: [HttpClientTestingModule],
      /////
      declarations: [EpisodeDetailsComponent],
    }).compileComponents();

    /////
    service = TestBed.inject(FetchEpisodesService);
    httpClient = TestBed.inject(HttpClient);
    httpTestController = TestBed.inject(HttpTestingController);
    ///
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
