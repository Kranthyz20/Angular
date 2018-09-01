import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Http, Response } from '@angular/http';

import { baseURL } from '../shared/baseurl';

import { of, Observable } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders', id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({ featured: true }).pipe(
      map(leaders => leaders[0]));
  }
}
