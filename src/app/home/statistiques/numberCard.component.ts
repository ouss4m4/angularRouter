import { Component, OnInit } from "@angular/core";
import { ServiceLayer } from "src/app/services/backend.service";

@Component({
  selector: "number-card",
  templateUrl: "numberCard.component.html"
})
export class NumberCardComponent implements OnInit {
  public statistiques = [];
  constructor(private _serviceLayer: ServiceLayer) {}
  ngOnInit() {
    this.initCards();
  }
  public initCards() {
    let date = new Date();
    this.statistiques.push({
      name: date.getFullYear(),
      value: this._serviceLayer.chaCurrentYear()
    });
    this.statistiques.push({
      name: date.getFullYear() - 1,
      value: this._serviceLayer.chaLastYear()
    });
    this.statistiques.push({
      name: "evolution %",
      value: this._serviceLayer.evolution()
    });
    this.statistiques.push({
      name: "Dettes",
      value: this._serviceLayer.dettes()
    });
  }
  showStats() {
    return this.statistiques.length > 0 ? true : false;
  }
  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };
  animations: boolean = true;
  view = [400, 400];
}
