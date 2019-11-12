import { MovieModel } from './movie.model';
import { SpecieModel } from './specie.model';
import { StarshipModel } from './starship.model';
import { VehicleModel } from './vehicle.model';

export interface CharacterModel {
  results: any;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: MovieModel[];
  species: SpecieModel[];
  starships: StarshipModel[];
  vehicles: VehicleModel[];
  url: string;
  created: string;
  edited: string;
}
