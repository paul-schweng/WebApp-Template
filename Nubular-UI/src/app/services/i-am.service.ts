import { Injectable } from '@angular/core';
import {iAmUser} from "../models/iAmUser";
import {CommunicationRequestService} from "./lib/communication-request.service";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IAmService extends CommunicationRequestService<any>{

  iAmUser: iAmUser = {
    name: "", username: ""
  };

  protected readonly backendUrlExt: string = 'iAm';


  protected prepareRequestObjectParameter(reqParameter: any): HttpParams {
    if(reqParameter.username)
      return new HttpParams().set('username', reqParameter.username);
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
