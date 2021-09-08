import { TestBed } from '@angular/core/testing';
import { FetchEpisodesService } from './fetch-episodes.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

const apiResponse: {} = {info: {next: 'https://rickandmortyapi.com/api/episode?page=2'}, results: [{name: 'Testor-Morty', episode: 'TEST02', id: 123, airDate: 'May 1, 2014', characters: []}]};

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
      .subscribe((data) => expect(data.info.next).toEqual(service.apiRicksponse.info.next)); // start request
      const res =  httpTestController.expectOne('https://rickandmortyapi.com/api/episode');


      res.flush(apiResponse);
      httpTestController.verify(); // assertion; expects one request to url above

  });


});
