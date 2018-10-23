import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SuiviComponent } from "./suivi.component";
import { SuiviDetailComponent } from "./suivi-detail/suivi-detail.component";
import { SuivilistComponent } from "./suivilist/suivilist.component";

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  {
    path: "main",
    component: SuiviComponent,
    children: [
      { path: "", component: SuivilistComponent },
      {
        path: ":id",
        component: SuiviDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SuiviRoutingModule {}
