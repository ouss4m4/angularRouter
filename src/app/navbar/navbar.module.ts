import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { NavbarRoutingModule } from './navbar-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { DocumentsModule } from '../documents/documents.module';
import { CommandeModule } from '../commande/commande.module';
import { ServiceLayer } from '../services/backend.service';
import { PanierService } from '../services/panier.service';

import { FactureService } from '../services/factures.service';
import { FactureDetailService } from '../services/factureDetails.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MaterialModule,
    DocumentsModule,
    CommandeModule,
    NgxChartsModule,
    HomeModule
  ],
  exports: [],
  declarations: [NavbarComponent],
  providers: [ServiceLayer, PanierService, FactureService, FactureDetailService]
})
export class NavbarModule {}
