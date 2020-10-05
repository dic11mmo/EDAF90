import { Pipe, PipeTransform } from '@angular/core';

import { MovieGenre } from '../services/movies/model';
import { TVGenre } from '../services/series/model';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(genreIDs: number[], genres: MovieGenre[] | TVGenre[]): string {
    if (genres.length) {
      return genreIDs
        // Removes genreID's that is not in the official list from the API
        .filter((genreID) => genres.find((genre) => genre.id === genreID))
        .map((genreID) => genres.find((genre) => genre.id === genreID).name)
        .join(', ');
    }
    return '';
  }
}
