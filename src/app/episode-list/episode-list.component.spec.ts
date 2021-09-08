import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodeListComponent } from './episode-list.component';

////////////
import { FetchEpisodesService } from '../fetch-episodes.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
///////////////
const apiResponse: {} = {info: {}, results: [{name: 'Testor-Morty', episode: 'TEST02', id: 123, airDate: 'May 1, 2014', characters: []}]};
describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let fixture: ComponentFixture<EpisodeListComponent>;
  let element;

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

      declarations: [EpisodeListComponent],
    }).compileComponents();

    /////
    service = TestBed.inject(FetchEpisodesService);
    httpClient = TestBed.inject(HttpClient);
    httpTestController = TestBed.inject(HttpTestingController);
    ///
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill the ApiRicksponse interface', () => {

    // service
    //   .getAll('https://rickandmortyapi.com/api/episode')
    //   .subscribe((data) =>
    //     {
    //       expect(component.episodeList.length).toBeGreaterThan(0)
    //       console.log("data from subscribe", data);

    //     }
    //   );

      const res = httpTestController.expectOne('https://rickandmortyapi.com/api/episode');
      console.log('before')
      res.flush(apiResponse);
      // console.log('this is a req', res.request);
      httpTestController.verify(); // assertion; expects one request to url above
      expect(component.episodeList.length).toBeGreaterThan(0)

  });

  it('get next page api', () => {
    // service
    //   .getAll('https://rickandmortyapi.com/api/episode')
    //   .subscribe((data) =>
    //     expect(component.apiRicksponse.info.next).toEqual('https://rickandmortyapi.com/api/episode?page=2')
    //   );

      const res = httpTestController.expectOne('https://rickandmortyapi.com/api/episode');
      res.flush(apiResponse);
      httpTestController.verify(); // assertion; expects one request to url above
      expect(component.apiRicksponse.info.next).toEqual('https://rickandmortyapi.com/api/episode?page=2')



   });
});
