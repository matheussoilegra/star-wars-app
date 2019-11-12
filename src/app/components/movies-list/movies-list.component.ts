import { Component, OnInit, OnDestroy } from "@angular/core";
import { MovieModel } from "src/app/models/movie.model";
import { MoviesService } from "src/app/services/movies.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss"]
})
export class MoviesListComponent implements OnInit, OnDestroy {
  movies: MovieModel[];
  movieSubscription: Subscription;
  searchText;

  constructor(private httpMovie: MoviesService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieSubscription = this.httpMovie
      .getMovies()
      .subscribe((data: MovieModel) => {
        this.movies = data.results;
      });
  }

  ngOnDestroy() {
    this.movieSubscription.unsubscribe();
  }
}
