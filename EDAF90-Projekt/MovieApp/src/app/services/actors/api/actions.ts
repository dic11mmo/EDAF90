import { dispatch } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';

import { PopularActor, FullActor } from '../model';
import { APIError } from '../../model';

// Flux-standard-action gives us stronger typing of our actions.
export type PopularActorsPayload = PopularActor[] | APIError;
export type FullActorPayload = FullActor | APIError | number;

export type PopularActorsAPIAction<T extends PopularActorsPayload = PopularActor[]>
  = FluxStandardAction<string, T>;
export type FullActorAPIAction<T extends FullActorPayload = FullActor | number>
  = FluxStandardAction<string, T>;

@Injectable()
export class ActorsApiActions {
  static readonly LOAD_POPULAR_ACTORS = 'LOAD_POPULAR_ACTORS';
  static readonly LOAD_POPULAR_ACTORS_STARTED = 'LOAD_POPULAR_ACTORS_STARTED';
  static readonly LOAD_POPULAR_ACTORS_SUCCEEDED = 'LOAD_POPULAR_ACTORS_SUCCEEDED';
  static readonly LOAD_POPULAR_ACTORS_FAILED = 'LOAD_POPULAR_ACTORS_FAILED';
  static readonly LOAD_FULL_ACTOR = 'LOAD_FULL_ACTOR';
  static readonly LOAD_FULL_ACTOR_STARTED = 'LOAD_FULL_ACTOR_STARTED';
  static readonly LOAD_FULL_ACTOR_SUCCEEDED = 'LOAD_FULL_ACTOR_SUCCEEDED';
  static readonly LOAD_FULL_ACTOR_FAILED = 'LOAD_FULL_ACTOR_FAILED';


  @dispatch()
  loadPopularActors = (): PopularActorsAPIAction => ({
    type: ActorsApiActions.LOAD_POPULAR_ACTORS
  })

  loadPopularActorsStarted = (): PopularActorsAPIAction => ({
    type: ActorsApiActions.LOAD_POPULAR_ACTORS_STARTED,
  })

  loadPopularActorsSucceeded = (payload: PopularActor[]): PopularActorsAPIAction<PopularActor[]> => ({
    type: ActorsApiActions.LOAD_POPULAR_ACTORS_SUCCEEDED,
    payload,
  })

  loadPopularActorsFailed = (error: APIError): PopularActorsAPIAction<APIError> => ({
    type: ActorsApiActions.LOAD_POPULAR_ACTORS_FAILED,
    payload: error,
    error: true,
  })

  @dispatch()
  loadFullActor = (id: number): FullActorAPIAction => ({
    type: ActorsApiActions.LOAD_FULL_ACTOR,
    payload: id,
  })

  loadFullActorStarted = (): FullActorAPIAction => ({
    type: ActorsApiActions.LOAD_FULL_ACTOR_STARTED,
  })

  loadFullActorSucceeded = (payload: FullActor): FullActorAPIAction<FullActor> => ({
    type: ActorsApiActions.LOAD_FULL_ACTOR_SUCCEEDED,
    payload,
  })

  loadFullActorFailed = (error: APIError): FullActorAPIAction<APIError> => ({
    type: ActorsApiActions.LOAD_FULL_ACTOR_FAILED,
    payload: error,
    error: true,
  })
}
