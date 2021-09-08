import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EpisodeDetailsComponent } from './episode-details.component';

describe('EpisodeDetailsComponent', () => {
  let component: EpisodeDetailsComponent;
  let fixture: ComponentFixture<EpisodeDetailsComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should navigate to /episode-details', fakeAsync(() => {
  //   router.navigateByUrl('episode-details');
  //   tick();
  //   expect(location.path()).toBe('/episode-details');
  // }));
});
