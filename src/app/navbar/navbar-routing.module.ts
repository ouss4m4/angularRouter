import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar.component";
import { AuthguardService } from "../services/authguard.service";
import { Link1Component } from "../home/link1.component";
import { Link2Component } from "../commande/link2.component";
import { Link3Component } from "../suivi/link3.component";
import { PanierComponent } from "../panier/panier.component";
import { DocumentsComponent } from "../documents/documents.component";
import { FacturesComponent } from "../factures/factures.component";
import { FactureDetailComponent } from "../factures/facture-detail/facture-detail.component";
import { AvoirsComponent } from "../avoirs/avoirs.component";
import { ReclamationComponent } from "../reclamation/reclamation.component";
import { PaimentComponent } from "../paiment/paiment.component";

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
        canActivate: [AuthguardService],
        children: [
          {
            path: "panier",
            component: PanierComponent,
            outlet: "panierOutlet"
          }
        ]
      },

      {
        path: "suivi",
        component: Link3Component,
        canActivate: [AuthguardService]
      },
      {
        path: "documents",
        component: DocumentsComponent,
        children: [
          {
            path: "factures",
            component: FacturesComponent,
            outlet: "facturesOutlet"
          },
          {
            path: "facture/:id",
            component: FactureDetailComponent,
            outlet: "facturesOutlet"
          },
          {
            path: "avoirs",
            component: AvoirsComponent,
            outlet: "avoirsOutlet"
          },
          {
            path: "reclamations",
            component: ReclamationComponent,
            outlet: "reclamationsOutlet"
          },
          {
            path: "paiments",
            component: PaimentComponent,
            outlet: "paimentsOutlet"
          }
        ]
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
