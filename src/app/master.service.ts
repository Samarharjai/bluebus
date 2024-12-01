import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type buslocation } from './app-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiURL: string = 'https://projectapi.gerasim.in/api/BusBooking/';
  constructor(private http: HttpClient) {}
  getlocations(): Observable<buslocation[]> {
    return this.http.get<buslocation[]>(this.apiURL + 'GetBusLocations');
  }
}
