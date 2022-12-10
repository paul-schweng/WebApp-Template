import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";
import {IAmService} from "../../services/i-am.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public iAm: IAmService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.iAm.iAmUser.username === '') {
      this.router.navigate(['/login']);
      return false;
    }
    return true;

  }



}
