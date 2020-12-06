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
import { CommonService } from './common-service';

@Injectable()
export class Resolver implements Resolve<any> {
  constructor(private http: HttpClient, private commonService: CommonService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // https://api.npms.io/v2/search?q=scope:angular

    return this.http.get(this.getUrl()).pipe(
      map((dataFromApi) => {
        return dataFromApi;
      }),
      catchError((err) => Observable.throw(err.json().error))
    );
  }
  private getUrl() {
    if (window.location.hostname.indexOf('localhost') === -1) {
      return '../angular-routing-sample/assets/Sample.json';
    } else {
      return '../assets/Sample.json';
    }
  }
}
