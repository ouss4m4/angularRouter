import { NgModule } from "@angular/core";

import { NavbarComponent } from "./navbar.component";
import { NavbarRoutingModule } from "./navbar-routing.module";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { Link1Component } from "../home/link1.component";
import { Link3Component } from "../suivi/link3.component";
import { DocumentsModule } from "../documents/documents.module";
import { CommandeModule } from "../commande/commande.module";
import { ServiceLayer } from "../services/backend.service";
import { PanierService } from "../services/panier.service";

@NgModule({
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MaterialModule,
    DocumentsModule,
    CommandeModule
  ],
  exports: [],
  declarations: [NavbarComponent, Link1Component, Link3Component],
  providers: [ServiceLayer, PanierService]
})
export class NavbarModule {}
