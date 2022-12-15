import {Injectable} from "@angular/core";
import {NbAuthSimpleToken, NbAuthToken, NbTokenStorage} from "@nebular/auth";
import {IAmService} from "./i-am.service";
import {environment} from "../../environments/default";

@Injectable()
export class CustomTokenStorage extends NbTokenStorage {

  protected key = 'auth_app_token';

  constructor(private iAmService: IAmService) {
    super();
  }


  get(): NbAuthToken {
    return new NbAuthSimpleToken(this.iAmService.iAmUser, environment.strategyName)
  }


  set(token: any) {
    this.iAmService.iAmUser = token.token;
  }


  clear() {
    this.iAmService.iAmUser = {username: '', name: ''}
  }
}
