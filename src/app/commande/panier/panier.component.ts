import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { MatTable } from "@angular/material";
import { PanierService } from "src/app/services/panier.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
];
@Component({
  selector: "app-panier",
  templateUrl: "panier.component.html",
  styleUrls: ["panier.component.css"]
})
export class PanierComponent implements OnInit {
  @ViewChild(MatTable)
  table: MatTable<any>;
  private _items;
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
    this.panierService.items.subscribe(items => {
      this._items = items;
      items.length > 0 ? this.refreshTable() : null;
    });
  }

  public get items() {
    return this._items;
  }

  public refreshTable() {
    this.table.renderRows();
  }

  public onItemRemove(code) {
    this.panierService.removeItem(code);
    this.refreshTable();
  }

  public onItemEdit(info) {
    this.panierService.editItem(info);
    this.refreshTable();
  }

  public goBack() {
    console.log("back");
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
