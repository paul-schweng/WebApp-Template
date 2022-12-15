import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main.component";
import {NbActionsModule, NbLayoutModule, NbSidebarModule} from "@nebular/theme";
import {MainRoutingModule} from "./main-routing.module";



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbActionsModule,
    NbSidebarModule,
    MainRoutingModule
  ]
})
export class MainModule { }
