import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<any> {
    return this.http.get(environment.characters);
  }

  getCharacterUrl(url) {
    return this.http.get(url);
  }
}
