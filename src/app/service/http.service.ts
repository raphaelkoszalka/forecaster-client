import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {CityModel} from '../pages/city/city.model';


@Injectable({providedIn: 'root'})
export class HttpService {

  constructor(private http: HttpClient) { }

  private static errorHandler(error: HttpErrorResponse) {
    // just to show the user the operation error,
    // end product would have a snackbar instead of a simple alert
    return Observable.throw(error.message || alert('Error saving city.'));
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
