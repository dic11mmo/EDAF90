import { dispatch } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';

import { PopularSeries, TVGenre, FullSerie } from '../model';
import { APIError } from '../../model';

// Flux-standard-action gives us stronger typing of our actions.
export type PopularSeriesPayload = PopularSeries[] | APIError | TVGenre;
export type TVGenresPayload = TVGenre[] | APIError;
export type FullSeriePayload = FullSerie | APIError | number;

export type PopularSeriesAPIAction<T extends PopularSeriesPayload = PopularSeries[] | TVGenre>
  = FluxStandardAction<string, T>;
export type TVGenresAPIAction<T extends TVGenresPayload = TVGenre[]>
  = FluxStandardAction<string, T>;
export type FullSerieAPIAction<T extends FullSeriePayload = FullSerie | number>
  = FluxStandardAction<string, T>;

@Injectable()
export class SeriesApiActions {
  static readonly LOAD_POPULAR_SERIES = 'LOAD_POPULAR_SERIES';
  static readonly LOAD_POPULAR_SERIES_STARTED = 'LOAD_POPULAR_SERIES_STARTED';
  static readonly LOAD_POPULAR_SERIES_SUCCEEDED = 'LOAD_POPULAR_SERIES_SUCCEEDED';
  static readonly LOAD_POPULAR_SERIES_FAILED = 'LOAD_POPULAR_SERIES_FAILED';
  static readonly LOAD_TV_GENRES = 'LOAD_TV_GENRES';
  static readonly LOAD_TV_GENRES_STARTED = 'LOAD_TV_GENRES_STARTED';
  static readonly LOAD_TV_GENRES_SUCCEEDED = 'LOAD_TV_GENRES_SUCCEEDED';
  static readonly LOAD_TV_GENRES_FAILED = 'LOAD_TV_GENRES_FAILED';
  static readonly LOAD_FULL_SERIE = 'LOAD_FULL_SERIE';
  static readonly LOAD_FULL_SERIE_STARTED = 'LOAD_FULL_SERIE_STARTED';
  static readonly LOAD_FULL_SERIE_SUCCEEDED = 'LOAD_FULL_SERIE_SUCCEEDED';
  static readonly LOAD_FULL_SERIE_FAILED = 'LOAD_FULL_SERIE_FAILED';

  // Popular series
  @dispatch()
  loadPopularSeries = (genre: TVGenre): PopularSeriesAPIAction => ({
    type: SeriesApiActions.LOAD_POPULAR_SERIES,
    payload: genre,
  })

  loadPopularSeriesStarted = (): PopularSeriesAPIAction => ({
    type: SeriesApiActions.LOAD_POPULAR_SERIES_STARTED,
  })

  loadPopularSeriesSucceeded = (payload: PopularSeries[]): PopularSeriesAPIAction<PopularSeries[]> => ({
    type: SeriesApiActions.LOAD_POPULAR_SERIES_SUCCEEDED,
    payload,
  })

  loadPopularSeriesFailed = (error: APIError): PopularSeriesAPIAction<APIError> => ({
    type: SeriesApiActions.LOAD_POPULAR_SERIES_FAILED,
    payload: error,
    error: true,
  })

  // TV Genres
  @dispatch()
  loadTVGenres = (): TVGenresAPIAction => ({
    type: SeriesApiActions.LOAD_TV_GENRES
  })

  loadTVGenresStarted = (): TVGenresAPIAction => ({
    type: SeriesApiActions.LOAD_TV_GENRES_STARTED,
  })

  loadTVGenresSucceeded = (payload: TVGenre[]): TVGenresAPIAction<TVGenre[]> => ({
    type: SeriesApiActions.LOAD_TV_GENRES_SUCCEEDED,
    payload,
  })

  loadTVGenresFailed = (error: APIError): TVGenresAPIAction<APIError> => ({
    type: SeriesApiActions.LOAD_TV_GENRES_FAILED,
    payload: error,
    error: true,
  })

  // Full Serie
  @dispatch()
  loadFullSerie = (id: number): FullSerieAPIAction => ({
    type: SeriesApiActions.LOAD_FULL_SERIE,
    payload: id
  })

  loadFullSerieStarted = (): FullSerieAPIAction => ({
    type: SeriesApiActions.LOAD_FULL_SERIE_STARTED,
  })

  loadFullSerieSucceeded = (payload: FullSerie): FullSerieAPIAction<FullSerie> => ({
    type: SeriesApiActions.LOAD_FULL_SERIE_SUCCEEDED,
    payload,
  })

  loadFullSerieFailed = (error: APIError): FullSerieAPIAction<APIError> => ({
    type: SeriesApiActions.LOAD_FULL_SERIE_FAILED,
    payload: error,
    error: true,
  })

}
