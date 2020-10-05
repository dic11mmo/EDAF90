import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MoviesApiActions } from './api/actions';
import { MovieAPIEpics } from './api/epics';
import { MovieAPIService } from './api/service';

@NgModule({
  imports: [CommonModule],
  providers: [MoviesApiActions, MovieAPIEpics, MovieAPIService],
})
export class MovieModule {}
