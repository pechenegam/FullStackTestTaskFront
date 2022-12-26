import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./layouts/content/login/login.component";
import {ConversionComponent} from "./layouts/content/conversion/conversion.component";
import {Urls} from "./utils/urls";
import {HistoryComponent} from "./layouts/content/history/history.component";
import {CurrentUserConversionsResolver} from "./resolvers/current-user-conversions.resolver";
import {AuthGuard} from "./guards/auth.guard";
import {UserRole} from "./models/user-role";
import {ExchangeRatesResolver} from "./resolvers/exchange-rates.resolver";
import {AllHistoryComponent} from "./layouts/content/all-history/all-history.component";
import {AllUsersConversionsResolver} from "./resolvers/all-users-conversions.resolver";

const routes: Routes = [
  {
    path: Urls.LOGIN,
    component: LoginComponent
  },
  {
    path: Urls.CONVERSION,
    component: ConversionComponent,
    resolve: {exchangeRates: ExchangeRatesResolver},
    canActivate: [AuthGuard],
    data: {roles: [UserRole.USER]}
  },
  {
    path: Urls.HISTORY,
    component: HistoryComponent,
    resolve: {conversions: CurrentUserConversionsResolver},
    canActivate: [AuthGuard],
    data: {roles: [UserRole.USER]}
  },
  {
    path: Urls.ALL_HISTORY,
    component: AllHistoryComponent,
    resolve: {conversions: AllUsersConversionsResolver},
    canActivate: [AuthGuard],
    data: {roles: [UserRole.USER]}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
