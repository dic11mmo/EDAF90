import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appmovie } from './appmovie';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class movieService {
    private ids = ['tt3896198', 'tt1517451', 'tt0468569', 'tt0137523', 'tt1727824', 'tt0071853'];

    constructor(
        private http: HttpClient) {
    }

    /** GET movies from the server */
    getMovies(imdbid): Observable<appmovie> {
        function fullURL(imdbid) {
            return 'http://www.omdbapi.com/?apikey=97021fa0&i=' + imdbid;
        }
        console.log("in service");
        return this.http.get<appmovie>(fullURL(imdbid))
            .pipe(tap(movies => movies));
    }
    
    getMovieIds(){
        return this.ids;
    }
}