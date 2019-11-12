import { VehiclesService } from './../../services/vehicles.service';
import { VehicleModel } from './../../models/vehicle.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit, OnDestroy {

  movie: MovieModel;
  vehicles: VehicleModel[] = [];
  vehiclesUrl: [];
  vehicleSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private http: MoviesService,
    private httpVehicles: VehiclesService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vehicleSubscription = this.http.getMovies().subscribe(
      (movie: MovieModel) => {
      this.movie = movie.results[id];
      this.getVehicles();
      }
    );
  }

  getVehicles(): void {
    this.vehiclesUrl = this.movie.vehicles;
    this.vehiclesUrl.map(data => {
      this.vehiclesUrl = data;
      this.httpVehicles.getVehiclesUrl(data).subscribe(
        (vehicle: VehicleModel) => {
          this.vehicles.push(vehicle);
        }
      );
    });
  }

  ngOnDestroy() {
    this.vehicleSubscription.unsubscribe();
  }
}
