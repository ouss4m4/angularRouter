import { NgModule } from "@angular/core";

import { SuiviComponent } from "./suivi.component";
import { SuiviRoutingModule } from "./suivi-routing.module";
import { SuiviDetailComponent } from './suivi-detail/suivi-detail.component';
import { SuivilistComponent } from './suivilist/suivilist.component';

@NgModule({
  imports: [SuiviRoutingModule],
  exports: [],
  declarations: [SuiviComponent, SuiviDetailComponent, SuivilistComponent],
  providers: []
})
export class SuiviModule {}
