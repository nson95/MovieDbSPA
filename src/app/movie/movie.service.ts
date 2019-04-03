import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from './movie';
import { JsonResponse } from '../util/json-response';
const url = 'http://localhost:8080/Movies/';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  list(): Observable<JsonResponse> {
    return this.http.get(url +'List') as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url + 'Get/' +id) as Observable<JsonResponse>;
  }
  add(movie: Movie): Observable<JsonResponse> {
    return this.http.post(url +'Add', movie) as Observable<JsonResponse>;
  }
  change(movie: Movie): Observable<JsonResponse> {
    return this.http.post(url +'Change', +movie) as Observable<JsonResponse>;
  }
  remove(movie: Movie): Observable<JsonResponse> {
    return this.http.post(url +'Remove', +movie) as Observable<JsonResponse>;
  }
  constructor(private http: HttpClient) { }
}
