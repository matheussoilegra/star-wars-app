import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilterPipe } from './pipes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    MoviesListComponent,
    CharactersListComponent,
    PlanetsListComponent,
    SpeciesListComponent,
    StarshipsListComponent,
    VehiclesListComponent,
    MovieDetailsComponent,
    LoadingComponent,
    PageNotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
