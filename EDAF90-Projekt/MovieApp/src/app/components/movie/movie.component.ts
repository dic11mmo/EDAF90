import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';

import { FullMovie, MovieCastMember, MovieVideo } from 'src/app/services/movies/model';
import { MoviesApiActions } from 'src/app/services/movies/api/actions';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @select(['fullMovie', 'movie'])
  readonly fullMovie!: Observable<FullMovie>;

  @select(['movieCast', 'cast'])
  readonly movieCast!: Observable<MovieCastMember[]>;

  @select(['movieVideos', 'videos'])
  readonly movieVideos!: Observable<MovieVideo[]>;

  movieCastColumns: string[] = ['image', 'character', 'name'];
  trailer: MovieVideo = undefined;

  constructor(private route: ActivatedRoute, private actions: MoviesApiActions) {}

  ngOnInit(): void {
    this.actions.loadFullMovie(this.route.snapshot.params.id);
    this.actions.loadMovieCast(this.route.snapshot.params.id);
    this.actions.loadMovieVideos(this.route.snapshot.params.id);

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
