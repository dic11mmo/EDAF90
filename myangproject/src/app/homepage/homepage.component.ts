import { Component, OnInit } from '@angular/core';
import { movieService } from '../appmovie.service';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../rental.service';
import { appmovie } from '../appmovie';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  mvIdList = [];
  mvList = [];
  
  constructor(private movieService: movieService,
    private rentalService: RentalService) {
      this.mvIdList = movieService.getMovieIds(); 
     }

  ngOnInit() {
    console.log("get movies is " + this.getMovies());
  }
  

  onRent(id) {
    this.rentalService.addRental(id);
  }

  getMovies(): void {

    this.mvIdList.forEach(id => {
    this.movieService.getMovies(id)
    .subscribe(movie => {
      var a = new appmovie(movie.Poster, movie.imdbID, movie.Title, movie.Year, movie.Genre);
      this.mvList.push(a);
    })});
    console.log(this.mvList);
  }

}