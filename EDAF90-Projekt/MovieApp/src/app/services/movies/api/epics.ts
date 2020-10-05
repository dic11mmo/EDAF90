import { Injectable } from '@angular/core';
import { Epic, ofType, combineEpics } from 'redux-observable-es6-compat';
import { of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { AppState } from '../../../store/model';
import { PopularMovie, MovieGenre, FullMovie, MovieCastMember, MovieVideo, SearchMovie } from '../model';
import { APIError } from '../../model';
import { MoviesApiActions, PopularMoviesAPIAction, MovieGenresAPIAction, FullMovieAPIAction,
  MovieCastAPIAction, MovieVideosAPIAction, SearchMovieAPIAction } from './actions';
import { MovieAPIService } from './service';

@Injectable()
export class MovieAPIEpics {
  constructor(
    private service: MovieAPIService,
    private actions: MoviesApiActions,
  ) {}

  createEpic() {
    return combineEpics(
      this.createLoadPopularMoviesEpic(),
      this.createLoadMovieGenresEpic(),
      this.createLoadFullMovieEpic(),
      this.createLoadMovieCastEpic(),
      this.createLoadMovieVideosEpic(),
      this.createLoadSearchMovieEpic(),
      );
  }

  private createLoadPopularMoviesEpic(): Epic<
    PopularMoviesAPIAction<PopularMovie[] | APIError | MovieGenre>,
    PopularMoviesAPIAction<PopularMovie[] | APIError | MovieGenre>,
    AppState
  > {
    return (action$, state$) =>
      action$.pipe(
        ofType(MoviesApiActions.LOAD_POPULAR_MOVIES),
        switchMap((action) =>
          this.service.getPopularMovies(1, (action.payload as MovieGenre)).pipe(
            map(data => this.actions.loadPopularMoviesSucceeded(data)),
            catchError(response =>
              of(
                this.actions.loadPopularMoviesFailed({
                  status: '' + response.status,
                }),
              ),
            ),
            startWith(this.actions.loadPopularMoviesStarted())
          )
        ),
      );
  }

  private createLoadMovieGenresEpic(): Epic<
    MovieGenresAPIAction<MovieGenre[] | APIError>,
    MovieGenresAPIAction<MovieGenre[] | APIError>,
    AppState
  > {
    return (action$, state$) =>
      action$.pipe(
        ofType(MoviesApiActions.LOAD_MOVIE_GENRES),
        switchMap(() =>
          this.service.getMovieGenres().pipe(
            map(data => this.actions.loadMovieGenresSucceeded(data)),
            catchError(response =>
              of(
                this.actions.loadMovieGenresFailed({
                  status: '' + response.status,
                }),
              ),
            ),
            startWith(this.actions.loadMovieGenresStarted())
          )
        ),
      );
  }

  private createLoadFullMovieEpic(): Epic<
    FullMovieAPIAction<FullMovie | APIError | number>,
    FullMovieAPIAction<FullMovie | APIError | number>,
    AppState
  > {
    return (action$, state$) =>
      action$.pipe(
        ofType(MoviesApiActions.LOAD_FULL_MOVIE),
        switchMap((action) =>
          this.service.getFullMovie(action.payload as number).pipe(
            map(data => this.actions.loadFullMovieSucceeded(data)),
            catchError(response =>
              of(
                this.actions.loadFullMovieFailed({
                  status: '' + response.status,
                }),
              ),
            ),
            startWith(this.actions.loadFullMovieStarted())
          )
        ),
      );
  }

  private createLoadMovieCastEpic(): Epic<
    MovieCastAPIAction<MovieCastMember[] | APIError | number>,
    MovieCastAPIAction<MovieCastMember[] | APIError | number>,
    AppState
  > {
    return (action$, state$) =>
      action$.pipe(
        ofType(MoviesApiActions.LOAD_MOVIE_CAST),
        switchMap((action) =>
          this.service.getMovieCast(action.payload as number).pipe(
            map(data => this.actions.loadMovieCastSucceeded(data)),
            catchError(response =>
              of(
                this.actions.loadMovieCastFailed({
                  status: '' + response.status,
                }),
              ),
            ),
            startWith(this.actions.loadMovieCastStarted())
          )
        ),
      );
  }

  private createLoadMovieVideosEpic(): Epic<
    MovieVideosAPIAction<MovieVideo[] | APIError | number>,
    MovieVideosAPIAction<MovieVideo[] | APIError | number>,
    AppState
  > {
    return (action$, state$) =>
      action$.pipe(
        ofType(MoviesApiActions.LOAD_MOVIE_VIDEOS),
        switchMap((action) =>
          this.service.getMovieVideos(action.payload as number).pipe(
            map(data => this.actions.loadMovieVideosSucceeded(data)),
            catchError(response =>
              of(
                this.actions.loadMovieVideosFailed({
                  status: '' + response.status,
                }),
              ),
            ),
            startWith(this.actions.loadMovieVideosStarted())
          )
        ),
      );
  }

  private createLoadSearchMovieEpic(): Epic<
    SearchMovieAPIAction<SearchMovie[] | APIError | string>,
    SearchMovieAPIAction<SearchMovie[] | APIError | string>,
    AppState
  > {
    return (action$, state$) =>
      action$.pipe(
        ofType(MoviesApiActions.LOAD_SEARCH_MOVIE),
        switchMap((action) =>
          this.service.getSearchMovie(1, (action.payload as string)).pipe(
            map(data => this.actions.loadSearchMovieSucceeded(data)),
            catchError(response =>
              of(
                this.actions.loadSearchMovieFailed({
                  status: '' + response.status,
                }),
              ),
            ),
            startWith(this.actions.loadSearchMovieStarted())
          )
        ),
      );
  }
}
