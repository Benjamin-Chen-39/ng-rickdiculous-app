import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
import { EpisodeDisplayComponent } from './episode-display/episode-display.component';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    HomePageComponent,
    EpisodeDetailsComponent,
    EpisodePageComponent,
    EpisodeDisplayComponent,
    CharacterListComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
