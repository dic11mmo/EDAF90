import { Action } from 'redux';

import {
  PopularMovie, PopularMovieResult, MovieGenre, MovieGenreResult,
  FullMovie, FullMovieResult, initialFullMovie, MovieCastMember,
  MovieCastResult, MovieVideo, MovieVideosResult,
  SearchMovieResult, SearchMovie } from '../model';
import {
  MoviesApiActions, PopularMoviesAPIAction, MovieGenresAPIAction, FullMovieAPIAction,
  MovieCastAPIAction, MovieVideosAPIAction, SearchMovieAPIAction } from './actions';

const INITIAL_STATE_POPULAR_MOVIES: PopularMovieResult = {
  items: [],
  loading: false,
  error: undefined,
};

const INITIAL_STATE_GENRE: MovieGenreResult = {
  genres: [],
  loading: false,
  error: undefined,
};

const INITIAL_STATE_FULL_MOVIE: FullMovieResult = {
  movie: initialFullMovie(),
  loading: false,
  error: undefined,
};

const INITIAL_STATE_MOVIE_CAST: MovieCastResult = {
  cast: [],
  loading: false,
  error: undefined,
};

const INITIAL_STATE_MOVIE_VIDEOS: MovieVideosResult = {
  videos: [],
  loading: false,
  error: undefined,
};

const INITIAL_STATE_SEARCH_MOVIE: SearchMovieResult = {
  items: [],
  loading: false,
  error: undefined,
};

export function popularMovieReducer(
  state: PopularMovieResult = INITIAL_STATE_POPULAR_MOVIES,
  a: Action,
): PopularMovieResult {
  const action = a as PopularMoviesAPIAction;
  switch (action.type) {
    case MoviesApiActions.LOAD_POPULAR_MOVIES_STARTED:
      return {
        ...state,
        items: [],
        loading: true,
        error: undefined,
      };
    case MoviesApiActions.LOAD_POPULAR_MOVIES_SUCCEEDED:
      return {
        ...state,
        items: action.payload as PopularMovie[],
        loading: false,
        error: undefined,
      };
    case MoviesApiActions.LOAD_POPULAR_MOVIES_FAILED:
      return {
        ...state,
        items: [],
        loading: false,
        error: true,
      };
  }
  return state;
}

export function movieGenreReducer(
  state: MovieGenreResult = INITIAL_STATE_GENRE,
  a: Action,
): MovieGenreResult {
  const action = a as MovieGenresAPIAction;
  switch (action.type) {
    case MoviesApiActions.LOAD_MOVIE_GENRES_STARTED:
      return {
        ...state,
        genres: [],
        loading: true,
        error: undefined,
      };
    case MoviesApiActions.LOAD_MOVIE_GENRES_SUCCEEDED:
      return {
        ...state,
        genres: action.payload as MovieGenre[],
        loading: false,
        error: undefined,
      };
    case MoviesApiActions.LOAD_MOVIE_GENRES_FAILED:
      return {
        ...state,
        genres: [],
        loading: false,
        error: true,
      };
  }
  return state;
}

export function fullMovieReducer(
  state: FullMovieResult = INITIAL_STATE_FULL_MOVIE,
  a: Action,
): FullMovieResult {
  const action = a as FullMovieAPIAction;
  switch (action.type) {
    case MoviesApiActions.LOAD_FULL_MOVIE_STARTED:
      return {
        ...state,
        movie: initialFullMovie(),
        loading: true,
        error: undefined,
      };
    case MoviesApiActions.LOAD_FULL_MOVIE_SUCCEEDED:
      return {
        ...state,
        movie: action.payload as FullMovie,
        loading: false,
        error: undefined,
      };
    case MoviesApiActions.LOAD_FULL_MOVIE_FAILED:
      return {
        ...state,
        movie: initialFullMovie(),
        loading: false,
        error: true,
      };
  }
  return state;
}

export function movieCastReducer(
  state: MovieCastResult = INITIAL_STATE_MOVIE_CAST,
  a: Action,
): MovieCastResult {
  const action = a as MovieCastAPIAction;
  switch (action.type) {
    case MoviesApiActions.LOAD_MOVIE_CAST_STARTED:
      return {
        ...state,
        cast: [],
        loading: true,
        error: undefined,
      };
    case MoviesApiActions.LOAD_MOVIE_CAST_SUCCEEDED:
      return {
        ...state,
        cast: action.payload as MovieCastMember[],
        loading: false,
        error: undefined,
      };
    case MoviesApiActions.LOAD_MOVIE_CAST_FAILED:
      return {
        ...state,
        cast: [],
        loading: false,
        error: true,
      };
  }
  return state;
}

export function movieVideosReducer(
  state: MovieVideosResult = INITIAL_STATE_MOVIE_VIDEOS,
  a: Action,
): MovieVideosResult {
  const action = a as MovieVideosAPIAction;
  switch (action.type) {
    case MoviesApiActions.LOAD_MOVIE_VIDEOS_STARTED:
      return {
        ...state,
        videos: [],
        loading: true,
        error: undefined,
      };
    case MoviesApiActions.LOAD_MOVIE_VIDEOS_SUCCEEDED:
      return {
        ...state,
        videos: action.payload as MovieVideo[],
        loading: false,
        error: undefined,
      };
    case MoviesApiActions.LOAD_MOVIE_VIDEOS_FAILED:
      return {
        ...state,
        videos: [],
        loading: false,
        error: true,
      };
  }
  return state;
}

export function searchMovieReducer(
  state: SearchMovieResult = INITIAL_STATE_SEARCH_MOVIE,
  a: Action,
): SearchMovieResult {
  const action = a as SearchMovieAPIAction;
  switch (action.type) {
    case MoviesApiActions.LOAD_SEARCH_MOVIE_STARTED:
      return {
        ...state,
        items: [],
        loading: true,
        error: undefined,
      };
    case MoviesApiActions.LOAD_SEARCH_MOVIE_SUCCEEDED:
      return {
        ...state,
        items: action.payload as SearchMovie[],
        loading: false,
        error: undefined,
      };
    case MoviesApiActions.LOAD_SEARCH_MOVIE_FAILED:
      return {
        ...state,
        items: [],
        loading: false,
        error: true,
      };
  }
  return state;
}
