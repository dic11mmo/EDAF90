import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { PopularSeries, TVGenre, initialTVGenre } from 'src/app/services/series/model';
import { Observable } from 'rxjs';
import { SeriesApiActions } from 'src/app/services/series/api/actions';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent implements OnInit {

  @select(['popularSeries', 'items'])
  readonly series!: Observable<PopularSeries[]>;

  @select(['TVGenres', 'genres'])
  readonly genres!: Observable<TVGenre[]>;

  constructor(private actions: SeriesApiActions) {
  }

  ngOnInit(): void {
    this.actions.loadPopularSeries(initialTVGenre());
    this.actions.loadTVGenres();
  }

  loadGenre(genre) {
    this.actions.loadPopularSeries(genre);
  }

}
