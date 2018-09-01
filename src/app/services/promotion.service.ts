import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Http, Response } from '@angular/http';

import { of, Observable } from 'rxjs';
import { delay, catchError, map } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';

import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private restangular: Restangular) { }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotions', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({ featured: true }).pipe(
      map(promo => promo[0]));
  }
}
