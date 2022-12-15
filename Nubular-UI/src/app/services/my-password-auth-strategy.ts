import {Injectable} from "@angular/core";
import {NbAuthResult, NbAuthStrategyClass, NbPasswordAuthStrategy, NbPasswordAuthStrategyOptions} from "@nebular/auth";
import {catchError, map, Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyPasswordAuthStrategy extends NbPasswordAuthStrategy {

  public getOptions(){
    return this.options;
  }

  static override setup(options: NbPasswordAuthStrategyOptions): [NbAuthStrategyClass, NbPasswordAuthStrategyOptions] {
    return [MyPasswordAuthStrategy, options];
  }

  override authenticate(data?: any): Observable<NbAuthResult> {
    const authorization = data.username ?
      {authorization: 'Basic ' + btoa(data.username + ':' + data.password)} :
      {authorization: ''};
    this.setOptions({...this.options, headers: {...authorization}});

    return super.authenticate(data);
  }

}
