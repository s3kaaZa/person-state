import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainPageComponent} from "./modules/welcome-page/components/main-page/main-page.component";
import {StatePageStartComponent} from "./modules/state-pages/components/state-page-start/state-page-start.component";
import {StatePageFinalComponent} from "./modules/state-pages/components/state-page-final/state-page-final.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'state-page-start', component: StatePageStartComponent },
  { path: 'state-page-final', component: StatePageFinalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
