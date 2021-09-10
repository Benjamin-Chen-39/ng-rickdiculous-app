import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import { FetchCharacterService } from '../fetch-character.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

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

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let element;
  let html;

  ////////////
  let service: FetchCharacterService;
  let httpClient: HttpClient;
  let httpTestController: HttpTestingController;
  ////////////

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      /////
      imports: [HttpClientTestingModule],
      /////
      declarations: [CharacterListComponent],
    }).compileComponents();

    /////
    service = TestBed.inject(FetchCharacterService);
    httpClient = TestBed.inject(HttpClient);
    httpTestController = TestBed.inject(HttpTestingController);
    ///
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
