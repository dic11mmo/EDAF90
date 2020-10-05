import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { SearchMovie, MovieGenre } from 'src/app/services/movies/model';
import { MoviesApiActions } from 'src/app/services/movies/api/actions';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  @select(['searchMovies', 'items'])
  readonly movies!: Observable<SearchMovie[]>;

  @select(['movieGenres', 'genres'])
  readonly genres!: Observable<MovieGenre[]>;

  query: '';

  constructor(private actions: MoviesApiActions) { }

  ngOnInit(): void {
    this.actions.loadMovieGenres();
  }

  searchMovie() {
    if (this.query) {
      this.actions.loadSearchMovie(this.query);
    }
  }

}
