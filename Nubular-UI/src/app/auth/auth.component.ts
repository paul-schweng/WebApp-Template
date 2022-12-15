import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/default";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  title = environment.title;

  constructor() {
  }


  ngOnInit(): void {
  }


}
