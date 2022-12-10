import {Routes} from "@angular/router";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {HelloWorldComponent} from "../components/hello-world/hello-world.component";


export const MAIN_ROUTES: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'hello', component: HelloWorldComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
]
