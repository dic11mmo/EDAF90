import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { Page } from '../../model';
import { PopularSeries, popularSeriesConvert, PopularSeriesData,
  TVGenre, initialTVGenre, TVGenreResponse,
  FullSerie, fullSerieConvert, FullSerieResponse } from '../model';

@Injectable({
  providedIn: 'root',
})
export class SeriesAPIService {

  constructor(private http: HttpClient) { }

  getPopularSeries(page: number = 1, genre: TVGenre = initialTVGenre()): Observable<PopularSeries[]> {
    const genreParam = genre.id !== -1 ? '&with_genres=' + genre.id : '';
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${environment.theMovieDbApiKey}${genreParam}&language=en-US&page=${page}`,
      { observe: 'response' }
    ).pipe(
      map(resp => {
        const respPage = resp.body as Page<PopularSeriesData>;
        return respPage.results;
      }),
      map(records => records.map(popularSeriesConvert)),
    );
  }

  getTVGenres(): Observable<TVGenre[]> {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${environment.theMovieDbApiKey}&language=en-US`,
      { observe: 'response' }
    ).pipe(
      map(resp => {
        return (resp.body as TVGenreResponse).genres;
      }),
    );
  }

  getFullSerie(id: number): Observable<FullSerie> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${environment.theMovieDbApiKey}&language=en-US`,
      { observe: 'response' }
    ).pipe(
      map(resp => {
        return fullSerieConvert(resp.body as FullSerieResponse);
      }),
    );
  }
}
