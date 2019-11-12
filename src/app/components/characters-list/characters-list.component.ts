import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { CharacterModel } from 'src/app/models/character.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { CharactersService } from 'src/app/services/characters.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})

export class CharactersListComponent implements OnInit, OnDestroy {
  movie: MovieModel;
  characters: CharacterModel[] = [];
  charactersUrl: [];
  characterSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private http: MoviesService,
    private httpCharacters: CharactersService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.characterSubscription = this.http.getMovies().subscribe(
      (movie: MovieModel) => {
      this.movie = movie.results[id];
      this.getCharacters();
      }
    );
  }

  getCharacters(): void {
    this.charactersUrl = this.movie.characters;
    this.charactersUrl.map(data => {
      this.charactersUrl = data;
      this.httpCharacters.getCharacterUrl(data).subscribe(
        (character: CharacterModel) => {
          this.characters.push(character);
        }
      );
    });
  }

  ngOnDestroy() {
    this.characterSubscription.unsubscribe();
  }
}
