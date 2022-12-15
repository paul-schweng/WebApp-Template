import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainGuard} from "./guards/main.guard";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
  {path: '', canActivate: [MainGuard], loadChildren: () => import('./main/main.module').then(mod => mod.MainModule)},
  {path: 'auth', canActivate: [AuthGuard], loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)},

  //------------- IMPORTANT: this wildcard path must be the very last route!!! ------------------
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
