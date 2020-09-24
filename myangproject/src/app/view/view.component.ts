import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../appmovie.service';
import { RentalService } from '../rental.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {
  rentedMovies: Array<any> = [];
  count;
  list: any;
  private movies: Array<string> = [];
  constructor(
    private movieService: movieService,
    private route: ActivatedRoute,
    private rentalService: RentalService) {
  }

  ngOnInit() {
    this.rentedMovies = this.rentalService.get();

  }
}