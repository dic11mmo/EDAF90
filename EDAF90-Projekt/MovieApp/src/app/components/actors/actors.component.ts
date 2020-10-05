import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { PopularActorResult } from 'src/app/services/actors/model';
import { ActorsApiActions } from 'src/app/services/actors/api/actions';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  @select(['popularActors', 'items'])
  readonly actors!: Observable<PopularActorResult>;

  constructor(private actions: ActorsApiActions) {
  }

  ngOnInit(): void {
    this.actions.loadPopularActors();
  }

}
