import { Action } from 'redux';

import { PopularSeries, PopularSeriesResult, TVGenre, TVGenreResult,
  FullSerie, FullSerieResult, initialFullSerie } from '../model';
import { SeriesApiActions, PopularSeriesAPIAction, TVGenresAPIAction, FullSerieAPIAction } from './actions';

const INITIAL_STATE_POPULAR_SERIES: PopularSeriesResult = {
  items: [],
  loading: false,
  error: undefined,
};

const INITIAL_STATE_GENRE: TVGenreResult = {
  genres: [],
  loading: false,
  error: undefined,
};

const INITIAL_STATE_FULL_SERIE: FullSerieResult = {
  serie: initialFullSerie(),
  loading: false,
  error: undefined,
}

export function popularSeriesReducer(
  state: PopularSeriesResult = INITIAL_STATE_POPULAR_SERIES,
  a: Action,
): PopularSeriesResult {
  const action = a as PopularSeriesAPIAction ;

  switch (action.type) {
    case SeriesApiActions.LOAD_POPULAR_SERIES_STARTED:
      return {
        ...state,
        items: [],
        loading: true,
        error: undefined,
      };
    case SeriesApiActions.LOAD_POPULAR_SERIES_SUCCEEDED:
      return {
        ...state,
        items: action.payload as PopularSeries[],
        loading: false,
        error: undefined,
      };
    case SeriesApiActions.LOAD_POPULAR_SERIES_FAILED:
      return {
        ...state,
        items: [],
        loading: false,
        error: true,
      };
  }

  return state;
}

export function TVGenreReducer(
  state: TVGenreResult = INITIAL_STATE_GENRE,
  a: Action,
): TVGenreResult {
  const action = a as TVGenresAPIAction;
  switch (action.type) {
    case SeriesApiActions.LOAD_TV_GENRES_STARTED:
      return {
        ...state,
        genres: [],
        loading: true,
        error: undefined,
      };
    case SeriesApiActions.LOAD_TV_GENRES_SUCCEEDED:
      return {
        ...state,
        genres: action.payload as TVGenre[],
        loading: false,
        error: undefined,
      };
    case SeriesApiActions.LOAD_TV_GENRES_FAILED:
      return {
        ...state,
        genres: [],
        loading: false,
        error: true,
      };
  }
  return state;
}

export function fullSerieReducer(
  state: FullSerieResult = INITIAL_STATE_FULL_SERIE,
  a: Action,
): FullSerieResult {
  const action = a as FullSerieAPIAction;
  switch (action.type) {
    case SeriesApiActions.LOAD_FULL_SERIE_STARTED:
      return {
        ...state,
        serie: initialFullSerie(),
        loading: true,
        error: undefined,
      };
    case SeriesApiActions.LOAD_FULL_SERIE_SUCCEEDED:
      return {
        ...state,
        serie: action.payload as FullSerie,
        loading: false,
        error: undefined,
      };
    case SeriesApiActions.LOAD_FULL_SERIE_FAILED:
      return {
        ...state,
        serie: initialFullSerie(),
        loading: false,
        error: true,
      };
  }
  return state;
}
