import { Component, OnInit } from "@angular/core";
import { ServiceLayer } from "src/app/services/backend.service";

@Component({
  selector: "bar-chart",
  templateUrl: "barchart.component.html"
})
export class BarChartComponent implements OnInit {
  constructor(private _serviceLayer: ServiceLayer) {}
  chaParLabo = [
    {
      name: "El Kendi",
      value: 180000
    },
    {
      name: "SANOFI",
      value: 210000
    },
    {
      name: "Pfizer",
      value: 500000
    },
    {
      name: " GSK",
      value: 280000
    },
    {
      name: "Pharma Prod",
      value: 900000
    }
  ];
  view = undefined;
  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  ngOnInit() {}
  //options

  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = "Country";
  showYAxisLabel = true;
  yAxisLabel = "CA par Labo";
  animations: boolean = true;
}
