import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { Page } from '../../model';

import { PopularActor, popularActorConvert, PopularActorData,
  FullActor, fullActorConvert, FullActorResponse } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ActorsAPIService {

  constructor(private http: HttpClient) { }

  getPopularActors(page: number = 1): Observable<PopularActor[]> {
    return this.http.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${environment.theMovieDbApiKey}&language=en-US&page=${page}`,
      { observe: 'response' }
    ).pipe(
      map(resp => {
        const respPage = resp.body as Page<PopularActorData>;
        return respPage.results;
      }),
      map(records => records.map(popularActorConvert)),
    );
  }

  getFullActor(id: number): Observable<FullActor> {
    return this.http.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${environment.theMovieDbApiKey}&language=en-US`,
      { observe: 'response' }
    ).pipe(
      map(resp => {
        return fullActorConvert(resp.body as FullActorResponse);
      }),
    );
  }
}
