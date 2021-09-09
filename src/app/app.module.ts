import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    HomePageComponent,
    EpisodeDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
