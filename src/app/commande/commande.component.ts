import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { debounceTime } from "rxjs/operators";
import { ServiceLayer } from "../services/backend.service";

@Component({
  selector: "app-commande",
  templateUrl: "./commande.component.html",
  styleUrls: ["./commande.component.css"]
})
export class CommandeComponent implements OnInit {
  search = new FormControl();
  options: object[] = [];
  public panierOrCommande = new FormControl(0);
  constructor(private _serviceLayer: ServiceLayer, private router: Router) {}

  ngOnInit() {
    this.search.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => this.fetchProductList(value));
  }
  //
  public fetchProductList(value) {
    if (value == "") {
      return;
    }
    this.options = [];
    this._serviceLayer.produitList(value).then(items => {
      for (let i = 0; i < items.length; i++) {
        this.options.push(items[i]);
      }
    });
  }
  //item selected from options
  public selected(event) {
    let code = event.option.value;
    this.search.setValue("");
    this.router.navigate(["commande", code]);
    this.panierOrCommande.setValue(0);
  }
  public navTab(event) {
    event = event === 0 ? "commande" : "panier";
  }
}
