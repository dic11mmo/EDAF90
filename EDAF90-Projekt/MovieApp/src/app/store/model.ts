import { PopularMovieResult, initialPopularMovieResult,
  MovieGenreResult, initialMovieGenreResult,
  FullMovieResult, initialFullMovieResult,
  MovieCastResult, initialMovieCastResult,
  MovieVideosResult, initialVideosResult,
  SearchMovieResult, initialSearchMovieResult } from '../services/movies/model';
import { PopularActorResult , initialPopularActorResult,
  FullActorResult, initialFullActorResult} from '../services/actors/model';
import { PopularSeriesResult, initialPopularSeriesResult,
  TVGenreResult, initialTVGenreResult,
  FullSerieResult, initialFullSerieResult } from '../services/series/model';

export type AppState = {
    popularMovies: PopularMovieResult,
    movieGenres: MovieGenreResult,
    fullMovie: FullMovieResult,
    movieCast: MovieCastResult,
    movieVideos: MovieVideosResult,
    popularActors: PopularActorResult,
    fullActor: FullActorResult,
    popularSeries: PopularSeriesResult,
    TVGenres: TVGenreResult,
    fullSerie: FullSerieResult,
    searchMovies: SearchMovieResult,
  } &
  Partial<{
    routes: string;
    feedback: unknown;
  }>;

export function initialAppState() {
  return {
    popularMovies: initialPopularMovieResult(),
    movieGenres: initialMovieGenreResult(),
    fullMovie: initialFullMovieResult(),
    movieCast: initialMovieCastResult(),
    movieVideos: initialVideosResult(),
    popularActors: initialPopularActorResult(),
    fullActor: initialFullActorResult(),
    popularSeries: initialPopularSeriesResult(),
    TVGenres: initialTVGenreResult(),
    fullSerie: initialFullSerieResult(),
    searchMovies: initialSearchMovieResult(),
  };
}
