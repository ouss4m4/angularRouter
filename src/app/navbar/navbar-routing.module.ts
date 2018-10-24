import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar.component";
import { AuthguardService } from "../services/authguard.service";
import { HomeComponent } from "../home/home.component";
import { CommandeComponent } from "../commande/commande.component";

import { DocumentsComponent } from "../documents/documents.component";
import { FacturesComponent } from "../factures/factures.component";
import { FactureDetailComponent } from "../factures/facture-detail/facture-detail.component";
import { AvoirsComponent } from "../avoirs/avoirs.component";
import { ReclamationComponent } from "../reclamation/reclamation.component";
import { PaimentComponent } from "../paiment/paiment.component";
import { PanierComponent } from "../commande/panier/panier.component";
import { ItemComponent } from "../commande/item/item.component";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    canActivate: [AuthguardService],
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthguardService]
      },
      {
        path: "commande",
        component: CommandeComponent,
        children: [
          {
            path: "",
            redirectTo: "/commande/(panierOutlet:panier)",
            pathMatch: "full"
          },
          { path: ":id", component: ItemComponent },
          {
            path: "panier",
            component: PanierComponent,
            outlet: "panierOutlet"
          }
        ]
      },

      {
        path: "suivi",
        loadChildren: "../suivi/suivi.module#SuiviModule"
      },
      {
        path: "documents",
        component: DocumentsComponent,
        children: [
          {
            path: "factures",
            component: FacturesComponent
          },
          {
            path: "facture/:id",
            component: FactureDetailComponent
          },
          {
            path: "avoirs",
            component: AvoirsComponent
          },
          {
            path: "reclamations",
            component: ReclamationComponent
          },
          {
            path: "paiments",
            component: PaimentComponent
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
