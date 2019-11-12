import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  public getSpecies(): Observable<any> {
    return this.http.get(environment.species);
  }

  getSpeciesUrl(url) {
    return this.http.get(url);
  }
}
