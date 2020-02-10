import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {CityModel} from '../pages/city/city.model';


@Injectable({providedIn: 'root'})
export class HttpService {

  constructor(private http: HttpClient) { }

  private static errorHandler(error: HttpErrorResponse) {
    if (error.status === 409) {
      // just to show the user the operation error,
      // end product would have a snackbar instead of a simple alert
      alert('City already exists.');
      return Observable.throw(error.message || 'city already exists');
    }

    if (error.status === 404) {
      // just to show the user the operation error,
      // end product would have a snackbar instead of a simple alert
      alert('City does not exists on Open Weather API Map.');
      return Observable.throw(error.message || 'city already exists');
    }

    return Observable.throw(error.message || 'city already exists');
  }

  public get(endpoint: string): Observable<object> {
    return this.http.get(endpoint).pipe(catchError(HttpService.errorHandler));
  }

  public post(endpoint: string, payload: CityModel): Observable<object> {
    return this.http.post(endpoint, payload).pipe(catchError(HttpService.errorHandler));
  }

  public delete(endpoint: string): Observable<object> {
    return this.http.delete(endpoint).pipe(catchError(HttpService.errorHandler));
  }
}
