import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class WelcomePageModule { }
