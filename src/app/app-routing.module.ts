import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";
import { CharactersListComponent } from "./components/characters-list/characters-list.component";
import { PlanetsListComponent } from "./components/planets-list/planets-list.component";
import { SpeciesListComponent } from "./components/species-list/species-list.component";
import { StarshipsListComponent } from "./components/starships-list/starships-list.component";
import { VehiclesListComponent } from "./components/vehicles-list/vehicles-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "home", component: MoviesListComponent },
  { path: "", component: MoviesListComponent },
  { path: "about", component: AboutComponent },
  { path: "movie", component: MoviesListComponent },
  { path: "movie/:id", component: MovieDetailsComponent },
  { path: "movie/:id/characters", component: CharactersListComponent },
  { path: "movie/:id/planets", component: PlanetsListComponent },
  { path: "movie/:id/species", component: SpeciesListComponent },
  { path: "movie/:id/starships", component: StarshipsListComponent },
  { path: "movie/:id/vehicles", component: VehiclesListComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
