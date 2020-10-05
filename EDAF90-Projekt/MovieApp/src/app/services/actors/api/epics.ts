import { Injectable } from '@angular/core';
import { Epic, ofType, combineEpics } from 'redux-observable-es6-compat';

import { of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { AppState } from '../../../store/model';
import { PopularActor, FullActor } from '../model';
import { APIError } from '../../model';
import { ActorsApiActions, PopularActorsAPIAction, FullActorAPIAction } from './actions';
import { ActorsAPIService } from './service';

@Injectable()
export class ActorsAPIEpics {
  constructor(
    private service: ActorsAPIService,
    private actions: ActorsApiActions,
  ) {}

  createEpic() {
    return combineEpics(
      this.createLoadPopularActorsEpic(),
      this.createLoadFullActorEpic(),
    );
  }

  private createLoadPopularActorsEpic(): Epic<
    PopularActorsAPIAction<PopularActor[] | APIError>,
    PopularActorsAPIAction<PopularActor[] | APIError>,
    AppState
  > {
    return (action$, state$) =>
      action$.pipe(
        ofType(ActorsApiActions.LOAD_POPULAR_ACTORS),
        switchMap(() =>
          this.service.getPopularActors().pipe(
            map(data => this.actions.loadPopularActorsSucceeded(data)),
            catchError(response =>
              of(
                this.actions.loadPopularActorsFailed({
                  status: '' + response.status,
                }),
              ),
            ),
            startWith(this.actions.loadPopularActorsStarted())
          )
        )
      );
  }

  private createLoadFullActorEpic(): Epic<
    FullActorAPIAction<FullActor | APIError | number>,
    FullActorAPIAction<FullActor | APIError | number>,
    AppState
  > {
    return (action$, state$) =>
      action$.pipe(
        ofType(ActorsApiActions.LOAD_FULL_ACTOR),
        switchMap((action) =>
          this.service.getFullActor(action.payload as number).pipe(
            map(data => this.actions.loadFullActorSucceeded(data)),
            catchError(response =>
              of(
                this.actions.loadFullActorFailed({
                  status: '' + response.status,
                }),
              ),
            ),
            startWith(this.actions.loadFullActorStarted())
          )
        ),
      );
  }
}
