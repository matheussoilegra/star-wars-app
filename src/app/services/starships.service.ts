import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  public getStarships(): Observable<any> {
    return this.http.get(environment.starships);
  }

  getStarshipsUrl(url) {
    return this.http.get(url);
  }
}
