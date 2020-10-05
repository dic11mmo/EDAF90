import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(average: number): number[] {
    return (new Array(Math.round(average))).fill(1);
  }

}
