import { MovieModel } from 'src/app/models/movie.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe',
})

export class FilterPipe implements PipeTransform {
  transform(movies: MovieModel[], searchTerm: string): MovieModel[] {
    if (!movies || !searchTerm) {
      return movies;
    }

    return movies.filter((movie) =>
      movie.episode_id.toString().indexOf(searchTerm.toLowerCase()) > -1 ||
      movie.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
  }
}

