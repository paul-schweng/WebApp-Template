import { Component, OnInit } from '@angular/core';
import {NbSidebarService} from "@nebular/theme";
import {environment} from "../../environments/default";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = environment.title;

  constructor(private readonly sidebarService: NbSidebarService) {
  }


  ngOnInit(): void {
  }


  toggleSidebar() {
    this.sidebarService.toggle(true, 'left');
  }

}
