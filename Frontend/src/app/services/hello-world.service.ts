import { Injectable } from '@angular/core';
import {BaseCommunicationService} from "./lib/base-communication.service";
import {CommunicationRequestService} from "./lib/communication-request.service";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService extends CommunicationRequestService<any>{

  protected prepareRequestObjectParameter(reqParameter: any): HttpParams {
    return new HttpParams();
  }

  public test(): Promise<any>{
    return super.sendGetRequest("test");
  }
}
