import { SpecieModel } from './../../models/specie.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { SpeciesService } from 'src/app/services/species.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})

export class SpeciesListComponent implements OnInit, OnDestroy {

  movie: MovieModel;
  species: SpecieModel[] = [];
  speciesUrl: [];
  specieSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private http: MoviesService,
    private httpSpecies: SpeciesService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.specieSubscription = this.http.getMovies().subscribe(
      (movie: MovieModel) => {
      this.movie = movie.results[id];
      this.getSpecies();
      }
    );
  }

  getSpecies(): void {
    this.speciesUrl = this.movie.species;
    this.speciesUrl.map(data => {
      this.speciesUrl = data;
      this.httpSpecies.getSpeciesUrl(data).subscribe(
        (specie: SpecieModel) => {
          this.species.push(specie);
        }
      );
    });
  }

  ngOnDestroy() {
    this.specieSubscription.unsubscribe();
  }
}
