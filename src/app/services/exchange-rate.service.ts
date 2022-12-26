import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExchangeRate} from "../models/exchange-rate";

const PATH = '/api/v1/exchanges';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<ExchangeRate[]> {
    return this.http.get<ExchangeRate[]>(PATH);
  }
}
