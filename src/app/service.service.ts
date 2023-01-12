import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  detailsURL="http://localhost:3000/details"
  constructor(private http:HttpClient) { }
  getDetails(){
    return this.http.get(this.detailsURL)
  }
}
