import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TVGenre } from 'src/app/services/series/model';
import { MovieGenre, initialMovieGenre } from 'src/app/services/movies/model';

@Component({
  selector: 'app-genre-select',
  templateUrl: './genre-select.component.html',
  styleUrls: ['./genre-select.component.css']
})
export class GenreSelectComponent implements OnInit {

  @Input() genres: MovieGenre[] | TVGenre[];
  initialGenre: MovieGenre = initialMovieGenre();
  selectedGenre: MovieGenre = this.initialGenre;

  @Output()
  genreSelect = new EventEmitter<MovieGenre | TVGenre>();

  loadGenre() {
    this.genreSelect.emit(this.selectedGenre);
  }

  constructor() { }

  ngOnInit(): void { }
}
