import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
import { NumberCardComponent } from "./statistiques/numberCard.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { EvolutionComponent } from "./evolutionChart/evolution.component";
import { BarChartComponent } from "./barChart/barchart.component";

@NgModule({
  imports: [NgxChartsModule],
  exports: [],
  declarations: [
    HomeComponent,
    NumberCardComponent,
    EvolutionComponent,
    BarChartComponent
  ],
  providers: []
})
export class HomeModule {}
