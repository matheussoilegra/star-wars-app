import { StarshipModel } from './starship.model';
import { VehicleModel } from './vehicle.model';

export interface MovieModel {
  results: any;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: [];
  starships: [];
  vehicles: [];
  characters: [];
  planets: [];
  url: string;
  edited: string;
}
