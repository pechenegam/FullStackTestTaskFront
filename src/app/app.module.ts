import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {HistoryComponent} from './layouts/content/history/history.component';
import {LoginComponent} from './layouts/content/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from "@angular/material/tabs";
import {MatSortModule} from '@angular/material/sort';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiPrefixInterceptor} from "./interceptors/api-prefix.interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SecurityInterceptor} from "./interceptors/security.interceptor";
import { AllHistoryComponent } from './layouts/content/all-history/all-history.component';
import { ConversionsTableComponent } from './layouts/content/shared/conversions-table/conversions-table.component';
import { HelloPageComponent } from './newLayouts/content/hello-page/hello-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HistoryComponent,
    LoginComponent,
    AllHistoryComponent,
    ConversionsTableComponent,
    HelloPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
