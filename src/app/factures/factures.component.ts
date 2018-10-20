import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-factures",
  templateUrl: "./factures.component.html",
  styleUrls: ["./factures.component.css"]
})
export class FacturesComponent implements OnInit {
  constructor(
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  public factureDetails() {
    this._router.navigate(["documents",{ outlets: { facturesOutlet: ["facture", 113] } },],{ skipLocationChange: true });
  }
}
