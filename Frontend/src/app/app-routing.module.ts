import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloWorldComponent} from "./components/hello-world/hello-world.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {AuthGuard} from "./routes/guards/auth.guard";
import {MAIN_ROUTES} from "./routes/mainRoutes";
import {LoginGuard} from "./routes/guards/login.guard";
import {AUTH_ROUTES} from "./routes/authRoutes";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', component: AppComponent, canActivate: [AuthGuard], children: MAIN_ROUTES},
  {path: '', component: AppComponent, canActivate: [LoginGuard], children: AUTH_ROUTES},

  //------------- IMPORTANT: this wildcard path must be the very last route!!! ------------------
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
