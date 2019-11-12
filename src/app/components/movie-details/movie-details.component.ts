import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie: MovieModel;
  detailSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private http: MoviesService,
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.detailSubscription = this.http.getMovies().subscribe(
      (movie: MovieModel) => {
      this.movie = movie.results[id];
      }
    );
  }

  ngOnDestroy() {
    this.detailSubscription.unsubscribe();
  }
}
