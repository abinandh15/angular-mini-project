import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  API_URL = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
   return this.http.get(`${this.API_URL}/users`)
  }
}
