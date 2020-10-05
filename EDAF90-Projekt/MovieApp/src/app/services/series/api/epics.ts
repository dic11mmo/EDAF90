import { Injectable } from '@angular/core';
import { Epic, ofType, combineEpics } from 'redux-observable-es6-compat';

import { of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { AppState } from '../../../store/model';
import { PopularSeries, TVGenre, FullSerie } from '../model';
import { APIError } from '../../model';
import { SeriesApiActions, PopularSeriesAPIAction, TVGenresAPIAction, FullSerieAPIAction } from './actions';
import { SeriesAPIService } from './service';

@Injectable()
export class SeriesAPIEpics {
  constructor(
    private service: SeriesAPIService,
    private actions: SeriesApiActions,
  ) {}

  createEpic() {
    return combineEpics(
      this.createLoadPopularSeriesEpic(),
      this.createLoadTVGenresEpic(),
      this.createLoadFullSerieEpic(),
    );
  }

  private createLoadPopularSeriesEpic(): Epic<
    PopularSeriesAPIAction<PopularSeries[] | APIError | TVGenre>,
    PopularSeriesAPIAction<PopularSeries[] | APIError | TVGenre>,
    AppState
  > {
    return (action$, state$) =>
      action$.pipe(
        ofType(SeriesApiActions.LOAD_POPULAR_SERIES),
        switchMap((action) =>
          this.service.getPopularSeries(1, (action.payload as TVGenre)).pipe(
            map(data => this.actions.loadPopularSeriesSucceeded(data)),
            catchError(response =>
              of(
                this.actions.loadPopularSeriesFailed({
                  status: '' + response.status,
                }),
              ),
            ),
            startWith(this.actions.loadPopularSeriesStarted())
          )
        )
      );
  }

  private createLoadTVGenresEpic(): Epic<
    TVGenresAPIAction<TVGenre[] | APIError>,
    TVGenresAPIAction<TVGenre[] | APIError>,
    AppState
  > {
    return (action$, state$) =>
      action$.pipe(
        ofType(SeriesApiActions.LOAD_TV_GENRES),
        switchMap(() =>
          this.service.getTVGenres().pipe(
            map(data => this.actions.loadTVGenresSucceeded(data)),
            catchError(response =>
              of(
                this.actions.loadTVGenresFailed({
                  status: '' + response.status,
                }),
              ),
            ),
            startWith(this.actions.loadTVGenresStarted())
          )
        ),
      );
  }

  private createLoadFullSerieEpic(): Epic<
    FullSerieAPIAction<FullSerie | APIError | number>,
    FullSerieAPIAction<FullSerie | APIError | number>,
    AppState
  > {
    return (action$, state$) =>
      action$.pipe(
        ofType(SeriesApiActions.LOAD_FULL_SERIE),
        switchMap((action) =>
          this.service.getFullSerie(action.payload as number).pipe(
            map(data => this.actions.loadFullSerieSucceeded(data)),
            catchError(response =>
              of(
                this.actions.loadFullSerieFailed({
                  status: '' + response.status,
                }),
              ),
            ),
            startWith(this.actions.loadFullSerieStarted())
          )
        ),
      );
  }
}
