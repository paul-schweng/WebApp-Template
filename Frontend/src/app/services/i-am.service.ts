import { Injectable } from '@angular/core';
import {iAmUser} from "../models/iAmUser";
import {CommunicationRequestService} from "./lib/communication-request.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {NotificationService} from "./notification.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class IAmService extends CommunicationRequestService<any>{

  iAmUser: iAmUser = {
    name: "", username: ""
  };

  protected readonly backendUrlExt: string = 'iAm';


  protected prepareRequestObjectParameter(reqParameter: any): HttpParams {
    return new HttpParams();
  }

  loadUser(){
    return super.sendGetRequest<iAmUser>(this.backendUrlExt)
      .then(user => {
        this.iAmUser = user
        return user;
      });
  }



}
