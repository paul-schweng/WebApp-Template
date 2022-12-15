import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule,
  NbSidebarModule,
  NbCardModule,
  NbToastrConfig, NbToastrModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {NbPasswordAuthStrategy, NbAuthModule, NbAuthService, NbAuthSimpleToken, NbTokenStorage} from '@nebular/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {XhrInterceptor} from "./providers/xhr-interceptor";
import {initApp} from "./providers/initApp";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {MainGuard} from "./guards/main.guard";
import {AuthenticationService} from "./services/authentication.service";
import {iAmUser} from "./models/iAmUser";
import {MyPasswordAuthStrategy} from "./services/my-password-auth-strategy";
import {AuthGuard} from "./guards/auth.guard";
import {CustomTokenStorage} from "./services/custom-token-storage";
import {environment} from "../environments/default";



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        MyPasswordAuthStrategy.setup({
          name: environment.strategyName,
          token: {
            class: NbAuthSimpleToken,
            key: 'iamUser'
          },
          logout: {
            method: 'post'
          },
          register: {
            requireValidToken: false
          },
          login: {
            method: 'get'
          },
        }),
      ],
      forms: {
        login: {
          strategy: environment.strategyName,
          rememberMe: false
        },
        register: {
          terms: false
        },
        validation: {
          email: {
            regexp: null
          },
          fullName: {
            required: true,
          },
          password: {
            minLength: 8
          }
        }
      },
    }),
    NgbModule,
    NbCardModule,
    NbToastrModule.forRoot(),
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
      deps: [NbAuthService]
    },{
      provide: NbTokenStorage,
      useClass: CustomTokenStorage
    },
    AuthGuard,
    MainGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
