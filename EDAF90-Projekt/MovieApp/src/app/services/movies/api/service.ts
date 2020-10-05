import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { Page } from '../../model';

import { PopularMovieData, PopularMovie, popularMovieConvert,
  MovieGenreResponse, MovieGenre, initialMovieGenre,
  FullMovieResponse, FullMovie, fullMovieConvert,
  MovieCastMember, MovieCastResponse, movieCastMemberConvert,
  MovieVideo, MovieVideosResponse,
  SearchMovieData, SearchMovie, searchMovieConvert } from '../model';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {

  constructor(private http: HttpClient) { }

  getPopularMovies(page: number = 1, genre: MovieGenre = initialMovieGenre()): Observable<PopularMovie[]> {
    const genreParam = genre.id !== -1 ? '&with_genres=' + genre.id : '';
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${environment.theMovieDbApiKey}${genreParam}&language=en-US&page=${page}`,
      { observe: 'response' }
    ).pipe(
      map(resp => {
        const respPage = resp.body as Page<PopularMovieData>;
        return respPage.results;
      }),
      map(records => records.map(popularMovieConvert)),
    );
  }

  getMovieGenres(): Observable<MovieGenre[]> {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${environment.theMovieDbApiKey}&language=en-US`,
      { observe: 'response' }
    ).pipe(
      map(resp => {
        return (resp.body as MovieGenreResponse).genres;
      }),
    );
  }

  getFullMovie(id: number): Observable<FullMovie> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.theMovieDbApiKey}&language=en-US`,
      { observe: 'response' }
    ).pipe(
      map(resp => {
        return fullMovieConvert(resp.body as FullMovieResponse);
      }),
    );
  }

  getMovieCast(id: number): Observable<MovieCastMember[]> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${environment.theMovieDbApiKey}&language=en-US`,
      { observe: 'response' }
    ).pipe(
      map(resp => {
        const respPage = resp.body as MovieCastResponse;
        return respPage.cast;
      }),
      map(records => records.map(movieCastMemberConvert)),
    );
  }

  getMovieVideos(id: number): Observable<MovieVideo[]> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${environment.theMovieDbApiKey}&language=en-US`,
      { observe: 'response' }
    ).pipe(
      map(resp => (resp.body as MovieVideosResponse).results)
    );
  }

  getSearchMovie(page: number = 1, query: string): Observable<SearchMovie[]> {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${environment.theMovieDbApiKey}&query=${query}&language=en-US&page=${page}`,
      { observe: 'response' }
    ).pipe(
      map(resp => {
        const respPage = resp.body as Page<SearchMovieData>;
        return respPage.results;
      }),
      map(records => records.map(searchMovieConvert)),
    );
  }
}
