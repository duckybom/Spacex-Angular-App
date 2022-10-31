import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  constructor(private httpClient: HttpClient) { }
  getMissions() {
    return this.httpClient.get<Mission>(`https://api.spacexdata.com/v3/launches`);
  }
  getMissionByID(id: Number) {
    return this.httpClient.get<Mission>(`https://api.spacexdata.com/v3/launches/${id}`);
  }
}
