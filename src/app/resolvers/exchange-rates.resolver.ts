import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ExchangeRateService} from "../services/exchange-rate.service";
import {ExchangeRate} from "../models/exchange-rate";

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesResolver implements Resolve<ExchangeRate[]> {

  constructor(private exchangeRateService: ExchangeRateService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExchangeRate[]> {
    return this.exchangeRateService.fetch();
  }
}
