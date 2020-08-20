import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ApiModule } from "typescript-angular-client";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule, NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

import { LoginComponent } from "./CustomComponents/login/login.component";
import { UserListComponent } from "./CustomComponents/user-list/user-list.component";
import { DashboardComponent } from "./CustomComponents/dashboard/dashboard.component";
import { PageNotFoundComponent } from './CustomComponents/page-not-found/page-not-found.component';
import { HeaderComponent } from './CustomComponents/header/header.component';
import { FooterComponent } from './CustomComponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ApiModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbAlertModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
