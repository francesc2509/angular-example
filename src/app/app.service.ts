import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item';

import { map, catchError, mapTo } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/json');

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Item[]>(
      'http://127.0.0.1:8080/',
      { headers: this.headers }
    ).pipe(
      catchError(err => throwError(err))
    );
  }

  add(item: Item) {
    return this.http.post<Item>(
      'http://127.0.0.1:8080/add',
      JSON.stringify(item),
      { headers: this.headers }
    ).pipe(
      catchError(err => throwError(err))
    );
  }
}
