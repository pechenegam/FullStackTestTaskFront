import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ConversionService} from "../services/conversion.service";
import {Conversion} from "../models/conversion";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserConversionsResolver implements Resolve<Conversion[]> {

  constructor(private service: ConversionService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Conversion[]> {
    return this.service.fetchCurrentUserConversions();
  }
}
