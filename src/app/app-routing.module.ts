import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';

const routes: Routes = [
  { path: 'episode-list', component: EpisodeListComponent },
  { path: 'episode/:id', component: EpisodeDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
