import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterUser} from "../models/registerUser";
import {IAmService} from "./i-am.service";
import {NotificationService} from "./notification.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
  private readonly backendUrlPath: string = 'auth';

  constructor(private readonly iAmService: IAmService) {
  }


  login(credentials?: any) {
    const headers = new HttpHeaders(credentials ?
      {authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)} :
      {authorization: ''});

    return this.iAmService.sendGetRequest(this.backendUrlPath + '/login', null, headers, true)
      .then(async res => {
        await this.iAmService.loadUser();
    });
  }


  logout(){
    return this.iAmService.sendPostRequest(this.backendUrlPath + '/logout', {});
  }

  register(user: RegisterUser){
    return this.iAmService.sendPostRequest(this.backendUrlPath + '/register', user);
  }

  isUsernameAvailable(username: string){
    return this.iAmService.sendGetRequest(this.backendUrlPath + `/available/${username}`)
  }

}
