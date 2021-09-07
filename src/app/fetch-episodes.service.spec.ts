import { TestBed } from '@angular/core/testing';
import { FetchEpisodesService } from './fetch-episodes.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('FetchEpisodesService', () => {
  let service: FetchEpisodesService;
  let httpClient: HttpClient;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FetchEpisodesService);
    httpClient = TestBed.inject(HttpClient);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all data', () => {
    expect(service.getAll.length).toEqual(1);
  });

  it('getAll(epApiUrl) should send one request to RnM api', () => {
    service
      .getAll(service.epApiUrl)
      .subscribe((data) => expect(data.results).toEqual(service.episodeList)); // start request
    httpTestController.expectOne('https://rickandmortyapi.com/api/episode');
    httpTestController.verify(); // assertion; expects one request to url above
  });
});
