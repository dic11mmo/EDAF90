import { combineReducers } from 'redux';

import { popularMovieReducer, movieGenreReducer, fullMovieReducer,
  movieCastReducer, movieVideosReducer, searchMovieReducer } from '../services/movies/api/reducer';
import { popularActorReducer, fullActorReducer } from '../services/actors/api/reducer';
import { popularSeriesReducer, TVGenreReducer, fullSerieReducer } from '../services/series/api/reducer';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = combineReducers({
  popularMovies: popularMovieReducer,
  movieGenres: movieGenreReducer,
  fullMovie: fullMovieReducer,
  movieCast: movieCastReducer,
  movieVideos: movieVideosReducer,
  popularActors: popularActorReducer,
  fullActor: fullActorReducer,
  popularSeries: popularSeriesReducer,
  TVGenres: TVGenreReducer,
  fullSerie: fullSerieReducer,
  searchMovies: searchMovieReducer
});
