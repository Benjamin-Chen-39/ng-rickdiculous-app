import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let element;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be display the title Rickdiculous Mortydom', () => {
    expect(component.title).toEqual('Rickdiculous Mortydom');
    expect(element.querySelector('#title')).not.toBeNull();
  });
});
