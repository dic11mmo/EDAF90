import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movieService } from './appmovie.service'
import { interval } from 'rxjs';



export
    interface RentedMovie {
    id: string;
    counter: number;
    poster: string

}

@Injectable()
export class RentalService {
    rented: RentedMovie[] = [];
    history: any = [];

    constructor(private movieService: movieService) {
    }

    addRental(rent: string) {
        const rented = {
            id: rent, counter: 10, poster: null
        };
        const fetchSubsc = this.movieService.getMovies(rented.id).subscribe(value => {
            rented.poster = value.Poster;
            fetchSubsc.unsubscribe();
        });
        const
            subscription = interval(1000).subscribe(x => {
                if (rented.counter >
                    0) {
                    rented.counter--;
                } else {
                    this.returnMovie(rent);
                    subscription.unsubscribe();
                }
            }
            );
        this.rented.push(rented);
    }

    returnMovie(item:
        string) {
        let
            movie = this.rented.pop();

        let
            index = 0;

        while (movie.id !==
            item) {
            const tmp = this.rented[index];
            this.rented[index] = movie;
            movie = tmp;
            index++;
        }
        this.history.push(movie.poster);
    }

    get() {
        return this.rented;
    }

    getHistory() {
        let unique = this.history.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        })
        return unique;
    }
}