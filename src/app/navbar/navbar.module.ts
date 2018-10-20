import { NgModule } from "@angular/core";

import { NavbarComponent } from "./navbar.component";
import { NavbarRoutingModule } from "./navbar-routing.module";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { Link1Component } from "../home/link1.component";
import { Link2Component } from "../commande/link2.component";
import { Link3Component } from "../suivi/link3.component";
import { PanierComponent } from "../panier/panier.component";
import { DocumentsModule } from "../documents/documents.module";

@NgModule({
  imports: [CommonModule, NavbarRoutingModule, MaterialModule, DocumentsModule],
  exports: [],
  declarations: [
    NavbarComponent,
    Link1Component,
    Link2Component,
    Link3Component,
    PanierComponent
  ],
  providers: []
})
export class NavbarModule {}
