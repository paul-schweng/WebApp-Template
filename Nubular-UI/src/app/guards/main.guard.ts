import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class MainGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router) {
  }

  canActivate() {
    return this.authService.isAuthenticated() ? true : this.router.parseUrl('/auth/login');
  }

}
