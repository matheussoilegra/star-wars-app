import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  public getVehicles(): Observable<any> {
    return this.http.get(environment.vehicles);
  }

  getVehiclesUrl(url) {
    return this.http.get(url);
  }
}
