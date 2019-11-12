import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { PlanetModel } from 'src/app/models/planet.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})

export class PlanetsListComponent implements OnInit, OnDestroy {

  movie: MovieModel;
  planets: PlanetModel[] = [];
  planetsUrl: [];
  planetSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private http: MoviesService,
    private httpPlanets: PlanetsService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.planetSubscription = this.http.getMovies().subscribe(
      (movie: MovieModel) => {
      this.movie = movie.results[id];
      this.getPlanets();
      }
    );
  }

  getPlanets(): void {
    this.planetsUrl = this.movie.planets;
    this.planetsUrl.map(data => {
      this.planetsUrl = data;
      this.httpPlanets.getPlanetsUrl(data).subscribe(
        (planet: PlanetModel) => {
          this.planets.push(planet);
        }
      );
    });
  }

  ngOnDestroy() {
    this.planetSubscription.unsubscribe();
  }
}
