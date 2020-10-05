export interface PopularActor {
  id: number;
  name: string;
  profilePath: string;
  knownFor: KnownFor[];
}

export interface PopularActorData {
  id: number;
  name: string;
  profile_path: string;
  known_for: KnownForData[];
}

export interface PopularActorResult {
  items: PopularActor[];
  loading: boolean;
  error: boolean | undefined;
}

export interface KnownFor {
  id: number;
  title: string;
  mediaType: string;
}

export interface KnownForData {
  id: number;
  title: string;
  name: string;
  media_type: string; // Either "movie" or "tv"
}

export function initialPopularActorResult(): PopularActorResult {
  return {
    items: [],
    loading: false,
    error: undefined,
  };
}

export const popularActorConvert = (record: PopularActorData): PopularActor => ({
  id: record.id,
  name: record.name,
  profilePath: record.profile_path,
  knownFor: record.known_for.map((item) => knownForConvert(item)),
});

export const knownForConvert = (item: KnownForData): KnownFor => ({
  id: item.id,
  title: (item.media_type === 'movie' ? item.title : item.name),
  mediaType: item.media_type,
});

export interface FullActorResponse {
  birthday: string;
  deathday: string;
  id: number;
  name: string;
  gender: number;
  biography: string;
  place_of_birth: string;
  profile_path: string;
}

export interface FullActorResult {
  actor: FullActor;
  loading: boolean;
  error: boolean | undefined;
}

export interface FullActor {
  birthday: string;
  deathday: string;
  id: number;
  name: string;
  gender: number;
  biography: string;
  placeOfBirth: string;
  profilePath: string;
}

export function initialFullActorResult(): FullActorResult {
  return {
    actor: initialFullActor(),
    loading: false,
    error: undefined,
  };
}

export function initialFullActor(): FullActor {
  return {
    biography: '',
    birthday: '',
    deathday: '',
    gender: 0,
    id: 0,
    name: '',
    placeOfBirth: '',
    profilePath: '',
  };
}

export const fullActorConvert = (actor: FullActorResponse): FullActor => ({
  biography: actor.biography,
  birthday: actor.birthday,
  deathday: actor.deathday,
  gender: actor.gender,
  id: actor.id,
  name: actor.name,
  placeOfBirth: actor.place_of_birth,
  profilePath: actor.profile_path,
});
