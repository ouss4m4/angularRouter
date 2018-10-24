import { NgModule } from "@angular/core";

import { SuiviComponent } from "./suivi.component";
import { SuiviRoutingModule } from "./suivi-routing.module";
import { SuiviDetailComponent } from "./suivi-detail/suivi-detail.component";
import { SuivilistComponent } from "./suivilist/suivilist.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";

@NgModule({
  imports: [CommonModule, SuiviRoutingModule, MaterialModule],
  exports: [],
  declarations: [SuiviComponent, SuiviDetailComponent, SuivilistComponent],
  providers: []
})
export class SuiviModule {}
