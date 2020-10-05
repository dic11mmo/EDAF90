import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { FullActor } from 'src/app/services/actors/model';
import { ActorsApiActions } from 'src/app/services/actors/api/actions';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  @select(['fullActor', 'actor'])
  readonly fullActor!: Observable<FullActor>;

  constructor(private route: ActivatedRoute, private actions: ActorsApiActions) { }

  ngOnInit(): void {
    this.actions.loadFullActor(this.route.snapshot.params.id);
  }

}
