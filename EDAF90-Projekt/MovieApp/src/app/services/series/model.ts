export interface PopularSeries {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  firstAired: Date;
  voteAverage: number;
  genreIDs: number[];
}

export interface PopularSeriesData {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
  first_air_date: string; // ISO?
  vote_average: number;
  genre_ids: number[];
}

export interface PopularSeriesResult {
  items: PopularSeries[];
  loading: boolean;
  error: boolean | undefined;
}

export function initialPopularSeriesResult(): PopularSeriesResult {
  return {
    items: [],
    loading: false,
    error: undefined,
  };
}

export const popularSeriesConvert = (record: PopularSeriesData): PopularSeries => ({
  id: record.id,
  title: record.name,
  posterPath: record.poster_path,
  overview: record.overview,
  firstAired: new Date(record.first_air_date),
  voteAverage: record.vote_average,
  genreIDs: record.genre_ids
});

// TV Genres
export interface TVGenreResponse {
  genres: TVGenre[];
}

export interface TVGenreResult {
  genres: TVGenre[];
  loading: boolean;
  error: boolean | undefined;
}

export interface TVGenre {
  id: number;
  name: string;
}

export function initialTVGenre(): TVGenre {
  return {
    id: -1,
    name: 'Any',
  };
}

export function initialTVGenreResult(): TVGenreResult {
  return {
    genres: [],
    loading: false,
    error: undefined,
  };
}

// Full Serie (without s just to clarify the singularity)
export interface FullSerieResponse {
  genres: TVGenre[];
  first_air_date: string;
  last_air_date: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export interface FullSerieResult {
  serie: FullSerie;
  loading: boolean;
  error: boolean | undefined;
}

export interface FullSerie {
  genres: TVGenre[];
  firstAirDate: string;
  lastAirDate: string;
  name: string;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  overview: string;
  posterPath: string;
  voteAverage: number;
}

export function initialFullSerieResult(): FullSerieResult {
  return {
    serie: initialFullSerie(),
    loading: false,
    error: undefined,
  };
}

export function initialFullSerie(): FullSerie {
  return {
    firstAirDate: '',
    genres: [],
    lastAirDate: '',
    name: '',
    numberOfEpisodes: 0,
    numberOfSeasons: 0,
    overview: '',
    posterPath: '',
    voteAverage: 0,
  };
}

export const fullSerieConvert = (serie: FullSerieResponse): FullSerie => ({
  firstAirDate: serie.first_air_date,
  genres: serie.genres,
  lastAirDate: serie.last_air_date,
  name: serie.name,
  numberOfEpisodes: serie.number_of_episodes,
  numberOfSeasons: serie.number_of_seasons,
  overview: serie.overview,
  posterPath: serie.poster_path,
  voteAverage: serie.vote_average,
});

