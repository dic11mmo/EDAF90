/*
  Model naming schema:
    ...Response (occationally Page when pagination) is what represents the actual data from server
    ...Result is what is used to wrap with loading and error properties
    ...Data is pre-converted data if needed (sometimes needed when lists are returned)
    ... is the finished data format to use in components
*/

// Popular Movie
export interface PopularMovieResult {
  items: PopularMovie[];
  loading: boolean;
  error: boolean | undefined;
}

export interface PopularMovieData {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface PopularMovie {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  releaseDate: Date;
  voteAverage: number;
  genreIDs: number[];
}

export function initialPopularMovieResult(): PopularMovieResult {
  return {
    items: [],
    loading: false,
    error: undefined,
  };
}

export const popularMovieConvert = (record: PopularMovieData): PopularMovie => ({
  id: record.id,
  title: record.title,
  posterPath: record.poster_path,
  overview: record.overview,
  releaseDate: new Date(record.release_date),
  voteAverage: record.vote_average,
  genreIDs: record.genre_ids
});

// Movie Genres
export interface MovieGenreResponse {
  genres: MovieGenre[];
}

export interface MovieGenreResult {
  genres: MovieGenre[];
  loading: boolean;
  error: boolean | undefined;
}

export interface MovieGenre {
  id: number;
  name: string;
}

export function initialMovieGenre(): MovieGenre {
  return {
    id: -1,
    name: 'Any',
  };
}

export function initialMovieGenreResult(): MovieGenreResult {
  return {
    genres: [],
    loading: false,
    error: undefined,
  };
}

// Full Movie
export interface FullMovieResponse {
  genres: MovieGenre[];
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
  backdrop_path: string;
}

export interface FullMovieResult {
  movie: FullMovie;
  loading: boolean;
  error: boolean | undefined;
}

export interface FullMovie {
  genres: MovieGenre[];
  overview: string;
  posterPath: string;
  releaseDate: Date;
  runtime: number;
  title: string;
  voteAverage: number;
  backdropPath: string;
}

export function initialFullMovieResult(): FullMovieResult {
  return {
    movie: initialFullMovie(),
    loading: false,
    error: undefined,
  };
}

export function initialFullMovie(): FullMovie {
  return {
    genres: [],
    overview: '',
    posterPath: '',
    releaseDate: new Date(),
    runtime: 0,
    title: '',
    voteAverage: 0,
    backdropPath: '',
  };
}

export const fullMovieConvert = (movie: FullMovieResponse): FullMovie => ({
  title: movie.title,
  genres: movie.genres,
  overview: movie.overview,
  posterPath: movie.poster_path,
  releaseDate: new Date(movie.release_date),
  runtime: movie.runtime,
  voteAverage: movie.vote_average,
  backdropPath: movie.backdrop_path
});

// Movie Cast
export interface MovieCastResponse {
  cast: MovieCastMemberData[];
}

export interface MovieCastResult {
  cast: MovieCastMember[];
  loading: boolean;
  error: boolean | undefined;
}

export interface MovieCastMemberData {
  character: string;
  name: string;
  profile_path: string;
  id: number;
}

export interface MovieCastMember {
  character: string;
  name: string;
  profilePath: string;
  id: number;
}

export const movieCastMemberConvert = (member: MovieCastMemberData): MovieCastMember => ({
  character: member.character,
  name: member.name,
  profilePath: member.profile_path,
  id: member.id,
});

export function initialMovieCastResult(): MovieCastResult {
  return {
    cast: [],
    loading: false,
    error: undefined,
  };
}

// Movie Videos
export interface MovieVideosResponse {
  results: MovieVideo[];
}

export interface MovieVideosResult {
  videos: MovieVideo[];
  loading: boolean;
  error: boolean | undefined;
}

export interface MovieVideo {
  key: string;
  name: string;
  site: string;
  type: string;
}

export function initialVideosResult(): MovieVideosResult {
  return {
    videos: [],
    loading: false,
    error: undefined,
  };
}

// Movie Search
export interface SearchMovieResult {
  items: SearchMovie[];
  loading: boolean;
  error: boolean | undefined;
}

export interface SearchMovieData {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface SearchMovie {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  releaseDate: Date;
  voteAverage: number;
  genreIDs: number[];
}

export function initialSearchMovieResult(): SearchMovieResult {
  return {
    items: [],
    loading: false,
    error: undefined,
  };
}

export const searchMovieConvert = (record: SearchMovieData): SearchMovie => ({
  id: record.id,
  title: record.title,
  posterPath: record.poster_path,
  overview: record.overview,
  releaseDate: new Date(record.release_date),
  voteAverage: record.vote_average,
  genreIDs: record.genre_ids
});
