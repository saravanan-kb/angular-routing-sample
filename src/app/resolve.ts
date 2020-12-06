import { Injectable } from '@angular/core';
import {
  Route,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Resolve,
} from '@angular/router';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Resolver implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve(): Observable<any> {
    // https://api.npms.io/v2/search?q=scope:angular

    return this.http
      .get('http://www.json-generator.com/api/json/get/cedmJYsPma')
      .pipe(
        map((dataFromApi) => console.log(dataFromApi)),
        catchError((err) => Observable.throw(err.json().error))
      );
  }
}
