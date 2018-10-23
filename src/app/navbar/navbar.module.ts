import { NgModule } from "@angular/core";

import { NavbarComponent } from "./navbar.component";
import { NavbarRoutingModule } from "./navbar-routing.module";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";

import { DocumentsModule } from "../documents/documents.module";
import { CommandeModule } from "../commande/commande.module";
import { ServiceLayer } from "../services/backend.service";
import { PanierService } from "../services/panier.service";
import { HomeComponent } from "../home/home.component";

@NgModule({
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MaterialModule,
    DocumentsModule,
    CommandeModule
  ],
  exports: [],
  declarations: [NavbarComponent, HomeComponent],
  providers: [ServiceLayer, PanierService]
})
export class NavbarModule {}
