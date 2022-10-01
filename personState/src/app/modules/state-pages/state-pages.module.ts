import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatePageStartComponent } from './components/state-page-start/state-page-start.component';
import { StatePageFinalComponent } from './components/state-page-final/state-page-final.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../../material.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    StatePageStartComponent,
    StatePageFinalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MatFormFieldModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: []
})
export class StatePagesModule { }
