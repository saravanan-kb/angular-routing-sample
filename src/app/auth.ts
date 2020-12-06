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
import { delay } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Auth implements CanActivate {
  constructor(private http: HttpClient) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
