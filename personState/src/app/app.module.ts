import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./modules/shared/shared.module";
import { WelcomePageModule } from "./modules/welcome-page/welcome-page.module";
import { MaterialModule } from "../material.module";
import { ReactiveFormsModule } from "@angular/forms";
import {StatePagesModule} from "./modules/state-pages/state-pages.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    StatePagesModule,
    WelcomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
