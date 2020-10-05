import { Action } from 'redux';

import { PopularActor, PopularActorResult, FullActorResult, initialFullActor, FullActor } from '../model';
import { ActorsApiActions, PopularActorsAPIAction, FullActorAPIAction } from './actions';

const INITIAL_POPULAR_ACTOR_STATE: PopularActorResult = {
  items: [],
  loading: false,
  error: undefined,
};

const INITIAL_FULL_ACTOR_STATE: FullActorResult = {
  actor: initialFullActor(),
  loading: false,
  error: undefined
};


export function popularActorReducer(
  state: PopularActorResult = INITIAL_POPULAR_ACTOR_STATE,
  a: Action
): PopularActorResult {
  const action = a as PopularActorsAPIAction;

  switch (action.type) {
    case ActorsApiActions.LOAD_POPULAR_ACTORS_STARTED:
      return {
        ...state,
        items: [],
        loading: true,
        error: undefined,
      };
    case ActorsApiActions.LOAD_POPULAR_ACTORS_SUCCEEDED:
      return {
        ...state,
        items: action.payload as PopularActor[],
        loading: false,
        error: undefined,
      };
    case ActorsApiActions.LOAD_POPULAR_ACTORS_FAILED:
      return {
        ...state,
        items: [],
        loading: false,
        error: true,
      };
  }

  return state;
}

export function fullActorReducer(
  state: FullActorResult = INITIAL_FULL_ACTOR_STATE,
  a: Action
): FullActorResult {
  const action = a as FullActorAPIAction;

  switch (action.type) {
    case ActorsApiActions.LOAD_FULL_ACTOR_STARTED:
      return {
        ...state,
        actor: initialFullActor(),
        loading: true,
        error: undefined,
      };
    case ActorsApiActions.LOAD_FULL_ACTOR_SUCCEEDED:
      return {
        ...state,
        actor: action.payload as FullActor,
        loading: false,
        error: undefined,
      };
    case ActorsApiActions.LOAD_FULL_ACTOR_FAILED:
      return {
        ...state,
        actor: initialFullActor(),
        loading: false,
        error: true,
      };
  }

  return state;
}
