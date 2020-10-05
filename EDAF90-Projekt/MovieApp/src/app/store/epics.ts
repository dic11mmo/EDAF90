import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable-es6-compat';

import { MovieAPIEpics } from '../services/movies/api/epics';
import { SeriesAPIEpics } from '../services/series/api/epics';
import { ActorsAPIEpics } from '../services/actors/api/epics';

@Injectable()
export class RootEpics {
  constructor(private movieEpics: MovieAPIEpics, private seriesEpics: SeriesAPIEpics, private actorEpics: ActorsAPIEpics) {}

  createEpics() {
    return combineEpics(
      this.movieEpics.createEpic(),
      this.seriesEpics.createEpic(),
      this.actorEpics.createEpic()
    );
  }
}
