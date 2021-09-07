import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EpisodeDisplayComponent } from './episode-display/episode-display.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    HomePageComponent,
    EpisodeDisplayComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
