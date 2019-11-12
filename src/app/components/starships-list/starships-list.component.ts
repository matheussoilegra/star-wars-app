import { StarshipsService } from './../../services/starships.service';
import { StarshipModel } from './../../models/starship.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit, OnDestroy{

  movie: MovieModel;
  starships: StarshipModel[] = [];
  starshipsUrl: [];
  starshipSubscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private http: MoviesService,
    private httpStarships: StarshipsService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.starshipSubscription = this.http.getMovies().subscribe(
      (movie: MovieModel) => {
      this.movie = movie.results[id];
      this.getStarships();
      }
    );
  }

  getStarships(): void {
    this.starshipsUrl = this.movie.starships;
    this.starshipsUrl.map(data => {
      this.starshipsUrl = data;
      this.httpStarships.getStarshipsUrl(data).subscribe(
        (starship: StarshipModel) => {
          this.starships.push(starship);
        }
      );
    });
  }

  ngOnDestroy() {
    this.starshipSubscription.unsubscribe();
  }
}
