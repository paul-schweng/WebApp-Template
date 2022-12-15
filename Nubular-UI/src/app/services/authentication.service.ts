import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {RegisterUser} from "../models/registerUser";
import {IAmService} from "./i-am.service";

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
      .then(async () => {
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
    if(!username)
      return null;

    return this.iAmService.sendGetRequest<any>(this.backendUrlPath + `/available`, {username: username}).then(res => {return res.available;})
  }

  isAuthenticated(){
    return !!this.iAmService.iAmUser?.username;
  }

}
