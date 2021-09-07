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
    service
      .getAll()
      .subscribe((data) =>
        expect(component.episodeList.length).toBeGreaterThan(0)
      );
  });
});
