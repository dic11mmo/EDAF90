import { dispatch } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';

import { PopularMovie, MovieGenre, FullMovie, MovieCastMember, MovieVideo, SearchMovie } from '../model';
import { APIError } from '../../model';

// Flux-standard-action gives us stronger typing of our actions.
export type PopularMoviesPayload = PopularMovie[] | APIError | MovieGenre;
export type MovieGenresPayload = MovieGenre[] | APIError;
export type FullMoviePayload = FullMovie | APIError | number;
export type MovieCastPayload = MovieCastMember[] | APIError | number;
export type MovieVideosPayload = MovieVideo[] | APIError | number;
export type SearchMoviePayload = SearchMovie[] | APIError | string;

export type PopularMoviesAPIAction<T extends PopularMoviesPayload = PopularMovie[] | MovieGenre>
  = FluxStandardAction<string, T>;
export type MovieGenresAPIAction<T extends MovieGenresPayload = MovieGenre[]>
  = FluxStandardAction<string, T>;
export type FullMovieAPIAction<T extends FullMoviePayload = FullMovie | number>
  = FluxStandardAction<string, T>;
export type MovieCastAPIAction<T extends MovieCastPayload = MovieCastMember[] | number>
  = FluxStandardAction<string, T>;
export type MovieVideosAPIAction<T extends MovieVideosPayload = MovieVideo[] | number>
  = FluxStandardAction<string, T>;
export type SearchMovieAPIAction<T extends SearchMoviePayload = SearchMovie[] | string>
  = FluxStandardAction<string, T>;

@Injectable()
export class MoviesApiActions {
  static readonly LOAD_POPULAR_MOVIES = 'LOAD_POPULAR_MOVIES';
  static readonly LOAD_POPULAR_MOVIES_STARTED = 'LOAD_POPULAR_MOVIES_STARTED';
  static readonly LOAD_POPULAR_MOVIES_SUCCEEDED = 'LOAD_POPULAR_MOVIES_SUCCEEDED';
  static readonly LOAD_POPULAR_MOVIES_FAILED = 'LOAD_POPULAR_MOVIES_FAILED';
  static readonly LOAD_MOVIE_GENRES = 'LOAD_MOVIE_GENRES';
  static readonly LOAD_MOVIE_GENRES_STARTED = 'LOAD_MOVIE_GENRES_STARTED';
  static readonly LOAD_MOVIE_GENRES_SUCCEEDED = 'LOAD_MOVIE_GENRES_SUCCEEDED';
  static readonly LOAD_MOVIE_GENRES_FAILED = 'LOAD_MOVIE_GENRES_FAILED';
  static readonly LOAD_FULL_MOVIE = 'LOAD_FULL_MOVIE';
  static readonly LOAD_FULL_MOVIE_STARTED = 'LOAD_FULL_MOVIE_STARTED';
  static readonly LOAD_FULL_MOVIE_SUCCEEDED = 'LOAD_FULL_MOVIE_SUCCEEDED';
  static readonly LOAD_FULL_MOVIE_FAILED = 'LOAD_FULL_MOVIE_FAILED';
  static readonly LOAD_MOVIE_CAST = 'LOAD_MOVIE_CAST';
  static readonly LOAD_MOVIE_CAST_STARTED = 'LOAD_MOVIE_CAST_STARTED';
  static readonly LOAD_MOVIE_CAST_SUCCEEDED = 'LOAD_MOVIE_CAST_SUCCEEDED';
  static readonly LOAD_MOVIE_CAST_FAILED = 'LOAD_MOVIE_CAST_FAILED';
  static readonly LOAD_MOVIE_VIDEOS = 'LOAD_MOVIE_VIDEOS';
  static readonly LOAD_MOVIE_VIDEOS_STARTED = 'LOAD_MOVIE_VIDEOS_STARTED';
  static readonly LOAD_MOVIE_VIDEOS_SUCCEEDED = 'LOAD_MOVIE_VIDEOS_SUCCEEDED';
  static readonly LOAD_MOVIE_VIDEOS_FAILED = 'LOAD_MOVIE_VIDEOS_FAILED';
  static readonly LOAD_SEARCH_MOVIE = 'LOAD_SEARCH_MOVIE';
  static readonly LOAD_SEARCH_MOVIE_STARTED = 'LOAD_SEARCH_MOVIE_STARTED';
  static readonly LOAD_SEARCH_MOVIE_SUCCEEDED = 'LOAD_SEARCH_MOVIE_SUCCEEDED';
  static readonly LOAD_SEARCH_MOVIE_FAILED = 'LOAD_SEARCH_MOVIE_FAILED';


  // Popular Movies
  @dispatch()
  loadPopularMovies = (genre: MovieGenre): PopularMoviesAPIAction => ({
    type: MoviesApiActions.LOAD_POPULAR_MOVIES,
    payload: genre
  })

  loadPopularMoviesStarted = (): PopularMoviesAPIAction => ({
    type: MoviesApiActions.LOAD_POPULAR_MOVIES_STARTED,
  })

  loadPopularMoviesSucceeded = (payload: PopularMovie[]): PopularMoviesAPIAction<PopularMovie[]> => ({
    type: MoviesApiActions.LOAD_POPULAR_MOVIES_SUCCEEDED,
    payload,
  })

  loadPopularMoviesFailed = (error: APIError): PopularMoviesAPIAction<APIError> => ({
    type: MoviesApiActions.LOAD_POPULAR_MOVIES_FAILED,
    payload: error,
    error: true,
  })

  // Movie Genres
  @dispatch()
  loadMovieGenres = (): MovieGenresAPIAction => ({
    type: MoviesApiActions.LOAD_MOVIE_GENRES
  })

  loadMovieGenresStarted = (): MovieGenresAPIAction => ({
    type: MoviesApiActions.LOAD_MOVIE_GENRES_STARTED,
  })

  loadMovieGenresSucceeded = (payload: MovieGenre[]): MovieGenresAPIAction<MovieGenre[]> => ({
    type: MoviesApiActions.LOAD_MOVIE_GENRES_SUCCEEDED,
    payload,
  })

  loadMovieGenresFailed = (error: APIError): MovieGenresAPIAction<APIError> => ({
    type: MoviesApiActions.LOAD_MOVIE_GENRES_FAILED,
    payload: error,
    error: true,
  })

  // Full Movie
  @dispatch()
  loadFullMovie = (id: number): FullMovieAPIAction => ({
    type: MoviesApiActions.LOAD_FULL_MOVIE,
    payload: id
  })

  loadFullMovieStarted = (): FullMovieAPIAction => ({
    type: MoviesApiActions.LOAD_FULL_MOVIE_STARTED,
  })

  loadFullMovieSucceeded = (payload: FullMovie): FullMovieAPIAction<FullMovie> => ({
    type: MoviesApiActions.LOAD_FULL_MOVIE_SUCCEEDED,
    payload,
  })

  loadFullMovieFailed = (error: APIError): FullMovieAPIAction<APIError> => ({
    type: MoviesApiActions.LOAD_FULL_MOVIE_FAILED,
    payload: error,
    error: true,
  })

  // Movie Cast
  @dispatch()
  loadMovieCast = (id: number): MovieCastAPIAction => ({
    type: MoviesApiActions.LOAD_MOVIE_CAST,
    payload: id,
  })

  loadMovieCastStarted = (): MovieCastAPIAction => ({
    type: MoviesApiActions.LOAD_MOVIE_CAST_STARTED,
  })

  loadMovieCastSucceeded = (payload: MovieCastMember[]): MovieCastAPIAction<MovieCastMember[]> => ({
    type: MoviesApiActions.LOAD_MOVIE_CAST_SUCCEEDED,
    payload,
  })

  loadMovieCastFailed = (error: APIError): MovieCastAPIAction<APIError> => ({
    type: MoviesApiActions.LOAD_MOVIE_CAST_FAILED,
    payload: error,
    error: true,
  })

  // Movie Videos
  @dispatch()
  loadMovieVideos = (id: number): MovieVideosAPIAction => ({
    type: MoviesApiActions.LOAD_MOVIE_VIDEOS,
    payload: id
  })

  loadMovieVideosStarted = (): MovieVideosAPIAction => ({
    type: MoviesApiActions.LOAD_MOVIE_VIDEOS_STARTED,
  })

  loadMovieVideosSucceeded = (payload: MovieVideo[]): MovieVideosAPIAction<MovieVideo[]> => ({
    type: MoviesApiActions.LOAD_MOVIE_VIDEOS_SUCCEEDED,
    payload,
  })

  loadMovieVideosFailed = (error: APIError): MovieVideosAPIAction<APIError> => ({
    type: MoviesApiActions.LOAD_MOVIE_VIDEOS_FAILED,
    payload: error,
    error: true,
  })

  // Search Movie
  @dispatch()
  loadSearchMovie = (query: string): SearchMovieAPIAction => ({
    type: MoviesApiActions.LOAD_SEARCH_MOVIE,
    payload: query
  })

  loadSearchMovieStarted = (): SearchMovieAPIAction => ({
    type: MoviesApiActions.LOAD_SEARCH_MOVIE_STARTED,
  })

  loadSearchMovieSucceeded = (payload: SearchMovie[]): SearchMovieAPIAction<SearchMovie[]> => ({
    type: MoviesApiActions.LOAD_SEARCH_MOVIE_SUCCEEDED,
    payload,
  })

  loadSearchMovieFailed = (error: APIError): SearchMovieAPIAction<APIError> => ({
    type: MoviesApiActions.LOAD_SEARCH_MOVIE_FAILED,
    payload: error,
    error: true,
  })
}
