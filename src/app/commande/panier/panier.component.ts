import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";

import { MatTable } from "@angular/material";
import { PanierService } from "src/app/services/panier.service";

@Component({
  selector: "app-panier",
  templateUrl: "panier.component.html",
  styleUrls: ["panier.component.css"]
})
export class PanierComponent implements OnInit {
  @ViewChild(MatTable)
  table: MatTable<any>;
  public _items: any[] = [];
  displayedColumns: string[] = [
    "Produit",
    "Taux_UG",
    "Colisage",
    "Labo",
    "Qts",
    "Code"
  ];

  constructor(private _router: Router, private panierService: PanierService) {}

  ngOnInit() {
    this.panierService.items.subscribe(items => (this._items = items));
  }

  public get items() {
    return this._items;
  }

  public refreshTable() {
    if (this._items.length === 0) {
    } else {
      this.table.renderRows();
    }
  }

  public onItemRemove(code) {
    this.panierService.removeItem(code);
    this.refreshTable();
  }

  public onItemEdit(x, y) {
    let info = {
      Code: y,
      Qts: x
    };
    this.panierService.editItem(info);
    this.refreshTable();
  }

  public addItemToPanier() {
    this.panierService.addItem({
      Code: "MD000004",
      Produit: "ACCU-CHEK ACTIVE  BAND B/50",
      DCI: "BANDELETTES",
      Labo: "ROCHE",
      Taux_UG: "0.00",
      Colisage: "300.00",
      Qts: 69
    });
    this.refreshTable();
  }
}
