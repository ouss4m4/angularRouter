import { NgModule } from "@angular/core";

import { DocumentsComponent } from "./documents.component";
import { CommonModule } from "@angular/common";
import { FacturesComponent } from "../factures/factures.component";
import { MaterialModule } from "../material.module";
import { FactureDetailComponent } from "../factures/facture-detail/facture-detail.component";
import { AvoirsComponent } from "../avoirs/avoirs.component";
import { RouterModule } from "@angular/router";
import { ReclamationComponent } from "../reclamation/reclamation.component";
import { PaimentComponent } from "../paiment/paiment.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  exports: [],
  declarations: [
    DocumentsComponent,
    FacturesComponent,
    FactureDetailComponent,
    AvoirsComponent,
    ReclamationComponent,
    PaimentComponent
  ],
  providers: []
})
export class DocumentsModule {}
