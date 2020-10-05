import { Pipe, PipeTransform } from '@angular/core';
import { MovieVideo } from '../services/movies/model';

@Pipe({
  name: 'trailer'
})
export class TrailerPipe implements PipeTransform {

  transform(videos : MovieVideo[]): MovieVideo {
    return Object.values(videos).filter(video => {
      return video.site === "YouTube" && video.type=="Trailer";
    }).pop();
  }

}
