import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgReduxModule } from '@angular-redux/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieModule } from './services/movies/module';
import { SeriesModule } from './services/series/module';
import { ActorModule } from './services/actors/module';
import { StoreModule } from './store/module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GenreSelectComponent } from './components/shared/genre-select/genre-select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RateComponent } from './components/rate/rate.component';
import { StarComponent } from './components/star/star.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { ActorsComponent } from './components/actors/actors.component';
import { ActorComponent } from './components/actor/actor.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { TvSerieComponent } from './components/tv-serie/tv-serie.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';

import { RatingPipe } from './pipes/rating.pipe';
import { GenrePipe } from './pipes/genre.pipe';
import { JoinGenresPipe } from './pipes/join-genres.pipe';
import { TrailerPipe } from './pipes/trailer.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: 'actors', component: ActorsComponent },
  { path: 'actors/:id', component: ActorComponent },
  { path: 'tv-series', component: TvSeriesComponent },
  { path: 'tv-series/:id', component: TvSerieComponent },
  { path: 'search-movie', component: SearchMovieComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GenreSelectComponent,
    NavbarComponent,
    HomeComponent,
    RateComponent,
    StarComponent,
    NotFoundComponent,
    MoviesComponent,
    MovieComponent,
    ActorsComponent,
    ActorComponent,
    TvSeriesComponent,
    TvSerieComponent,
    SearchMovieComponent,
    RatingPipe,
    GenrePipe,
    JoinGenresPipe,
    TrailerPipe,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    NgReduxModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule,
    MovieModule,
    SeriesModule,
    ActorModule,
    StoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
