import { TestBed } from '@angular/core/testing';
import { FetchCharacterService } from './fetch-character.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

const apiResponse: {} = {
  id: 123,
  name: 'test',
  status: 'test',
  species: 'test',
  type: '',
  gender: 'test',
  origin: { name: 'test', url: 'test' },
  location: { name: 'test', url: 'test' },
  image: 'test',
  episode: [],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: 'test',
};

describe('FetchCharacterService', () => {
  let service: FetchCharacterService;
  let httpClient: HttpClient;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FetchCharacterService);
    httpClient = TestBed.inject(HttpClient);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCharData() should send one request to RnM api', () => {
    service
      .getCharData('https://rickandmortyapi.com/api/character/1')
      .subscribe((data) => expect(data).toEqual(service.characters[0])); // start request
    const res = httpTestController.expectOne(
      'https://rickandmortyapi.com/api/character/1'
    );
    res.flush(apiResponse);
    httpTestController.verify(); // assertion; expects one request to url above
  });
});
