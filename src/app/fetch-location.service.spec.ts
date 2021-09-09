import { TestBed } from '@angular/core/testing';
import { FetchLocationService } from './fetch-location.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

const apiResponse: {} = {
  info: { next: 'https://rickandmortyapi.com/api/loaction?page=2' },
  results: [
    {
      id: 123,
      name: 'Test Planet',
      type: 'moon',
      dimension: 'third',
      residents: [],
      url: 'testurl',
      created: 'testdate',
    },
  ],
};

describe('FetchLocationService', () => {
  let service: FetchLocationService;
  let httpClient: HttpClient;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FetchLocationService);
    httpClient = TestBed.inject(HttpClient);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll() should send one request to RnM api', () => {
    service
      .getAll()
      .subscribe((data) =>
        expect(data.info.next).toEqual(service.apiRicksponse.info.next)
      ); // start request
    const res = httpTestController.expectOne(
      'https://rickandmortyapi.com/api/location'
    );
    res.flush(apiResponse);
    httpTestController.verify(); // assertion; expects one request to url above
  });
});
