import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloWorldComponent} from "./components/hello-world/hello-world.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {XhrInterceptor} from "./providers/xhr-interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from "@angular/material/button";
import {ToastrModule} from "ngx-toastr";
import { LoginComponent } from './components/auth/login/login.component';
import {BusyDivComponent} from "./components/common/busy-div/busy-div.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputPwdComponent} from "./components/common/input-pwd/input-pwd.component";
import {MatIconModule} from "@angular/material/icon";
import {CgBusyDirective, CgBusyModule} from "angular-busy2";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthenticationService} from "./services/authentication.service";
import {initApp} from "./providers/initApp";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent,
    BusyDivComponent,
    RegisterComponent,
    LoginComponent,
    InputPwdComponent,
    NavbarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    CgBusyDirective,
    MatProgressSpinnerModule,
    CgBusyModule.forRoot({
      backdrop: true
    }),
    MatToolbarModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true
    },{
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [AuthenticationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


