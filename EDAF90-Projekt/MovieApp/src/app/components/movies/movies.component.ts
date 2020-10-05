import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { PopularMovie, MovieGenre, initialMovieGenre } from './../../services/movies/model';
import { MoviesApiActions } from 'src/app/services/movies/api/actions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @select(['popularMovies', 'items'])
  readonly movies!: Observable<PopularMovie[]>;

  @select(['movieGenres', 'genres'])
  readonly genres!: Observable<MovieGenre[]>;

  constructor(private actions: MoviesApiActions) {}

  ngOnInit(): void {
    this.actions.loadPopularMovies(initialMovieGenre());
    this.actions.loadMovieGenres();
  }

  loadGenre(genre) {
    this.actions.loadPopularMovies(genre);
  }
}
