import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommandeComponent } from "./commande.component";
import { ItemComponent } from "./item/item.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { PanierComponent } from "./panier/panier.component";
import { MaterialModule } from "../material.module";
import { MatSnackBar, MatSnackBarModule } from "@angular/material";

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    RouterModule,
    MatSnackBarModule
  ],
  exports: [],
  declarations: [CommandeComponent, ItemComponent, PanierComponent],
  providers: [MatSnackBar]
})
export class CommandeModule {}
