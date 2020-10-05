import { Pipe, PipeTransform } from '@angular/core';

import { MovieGenre } from '../services/movies/model';
import { TVGenre } from '../services/series/model';

@Pipe({
  name: 'joinGenres'
})
export class JoinGenresPipe implements PipeTransform {

  transform(values: MovieGenre[] | TVGenre[]): unknown {
    return values.map((genre) => genre.name).join(', ');
  }

}
