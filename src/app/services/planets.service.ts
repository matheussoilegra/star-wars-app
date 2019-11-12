import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  public getPlanets(): Observable<any> {
    return this.http.get(environment.planets);
  }

  getPlanetsUrl(url) {
    return this.http.get(url);
  }
}
