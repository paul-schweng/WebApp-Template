import { Component } from '@angular/core';
import {HelloWorldService} from "../../services/hello-world.service";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {

  text = "hello";

  constructor(private readonly testService: HelloWorldService,
              public readonly authService: AuthenticationService) {
  }

  public test() {
    this.testService.test().then(res => this.text = res);
  }

}
