import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs';
import {HttpService} from '../../service/http.service';
import {Observable, Observer} from 'rxjs';
import {AppConstants} from '../../app-constants';

@Injectable()
export class CitiesResolver implements Resolve<any> {

  constructor(private http: HttpService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<object>>  {
    return Observable.create((observer: Observer<any>) => {
      this.http.get(AppConstants.SERVER_API_GET_ALL)
        .subscribe(
          (res) => { observer.next(res); observer.complete(); },
          (err) => { throw new Error(err); }
        );
    });
  }

}
