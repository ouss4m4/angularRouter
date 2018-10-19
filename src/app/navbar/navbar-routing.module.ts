import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar.component";
import { AuthguardService } from "../services/authguard.service";
import { Link1Component } from "../home/link1.component";
import { Link2Component } from "../commande/link2.component";
import { Link3Component } from "../suivi/link3.component";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    canActivate: [AuthguardService],
    children: [
      {
        path: "",
        component: Link1Component,
        canActivate: [AuthguardService]
      },
      {
        path: "commande",
        component: Link2Component,
        canActivate: [AuthguardService]
      },
      {
        path: "suivi",
        component: Link3Component,
        canActivate: [AuthguardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class NavbarRoutingModule {}
