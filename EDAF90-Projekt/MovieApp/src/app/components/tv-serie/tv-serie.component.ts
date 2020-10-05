import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FullSerie } from 'src/app/services/series/model';
import { SeriesApiActions } from 'src/app/services/series/api/actions';

@Component({
  selector: 'app-tv-serie',
  templateUrl: './tv-serie.component.html',
  styleUrls: ['./tv-serie.component.css']
})
export class TvSerieComponent implements OnInit {

  @select(['fullSerie', 'serie'])
  readonly fullSerie!: Observable<FullSerie>;

  constructor(private route: ActivatedRoute, private actions: SeriesApiActions) { }

  ngOnInit(): void {
    this.actions.loadFullSerie(this.route.snapshot.params.id);
  }

}
