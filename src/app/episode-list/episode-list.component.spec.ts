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
const apiResponse: {} = {
  info: {},
  results: [
    {
      name: 'Testor-Morty',
      episode: 'TEST02',
      id: 123,
      airDate: 'May 1, 2014',
      characters: [],
    },
  ],
};
describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let fixture: ComponentFixture<EpisodeListComponent>;
  let element;
  let html;

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
    html = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Button should call next page', () => {
    spyOn(component, 'getNext');
    const nextButton = html.querySelector('#nextPage');
    nextButton.click();
    expect(component.getNext).toHaveBeenCalled();
  });
});
