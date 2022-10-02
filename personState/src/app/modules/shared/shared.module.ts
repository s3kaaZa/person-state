import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import { CommonPanelComponent } from './components/common-panel/common-panel.component';
import {MaterialModule} from "../../../material.module";


@NgModule({
  declarations: [
    HeaderComponent,
    CommonPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    CommonPanelComponent
  ]
})
export class SharedModule { }
