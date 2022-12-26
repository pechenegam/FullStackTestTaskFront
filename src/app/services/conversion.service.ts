import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conversion} from "../models/conversion";
import {ExchangeRate} from "../models/exchange-rate";

const PATH = '/api/v1/conversions';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor(private http: HttpClient) {
  }

  fetchCurrentUserConversions(): Observable<Conversion[]> {
    return this.http.get<Conversion[]>(`${PATH}`);
  }

  fetchAllUsersConversions(): Observable<Conversion[]> {
    return this.http.get<Conversion[]>(`${PATH}/all`);
  }

  convert(sum: number, from: ExchangeRate, to: ExchangeRate): Observable<Conversion> {
    return this.http.post<Conversion>(PATH, {fromValue: sum, currencyFrom: from.currency, currencyTo: to.currency});
  }
}
