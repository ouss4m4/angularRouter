import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { FormControl } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

import { FactureService } from "../services/factures.service";

@Component({
  selector: "app-factures",
  templateUrl: "./factures.component.html",
  styleUrls: ["./factures.component.css"]
})
/*  DocNum: '180134503',
    total: this._getRandomRegisteryEntry('id24', 5),
    dateCreated: new Date(),              */
export class FacturesComponent implements OnInit {
  public dateDebut = new FormControl(new Date());
  public dateFin = new FormControl(new Date(Date.now()));

  public factures;
  displayedColumns: string[] = ["DocNum", "dateCreated", "total"];
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private _router: Router,
    public snackBar: MatSnackBar,
    private facturesService: FactureService
  ) {}

  ngOnInit() {
    this.facturesService.items.subscribe(items => {
      this.factures = new MatTableDataSource<any>(items);
      this.factures.paginator = this.paginator;
    });

    this.getCurrentMonth();
  }

  //both inputs are valid dates, &  dateFin > Debut
  public isValidDate() {
    if (this.dateDebut.valid && this.dateFin.valid) {
      if (this.dateFin.value > this.dateDebut.value) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  //fetch selected date factures
  public SearchByDate() {
    if (this.isValidDate()) {
      this.openSnackBar("Searching ...", "ok");
      this.facturesService.fetchByDate("1", "2");
    } else {
      return;
    }
  }
  //at init show last month bracket
  public getCurrentMonth() {
    let date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.dateDebut.setValue(firstDay);
    this.dateFin.setValue(lastDay);
  }
  //route to facture details
  public factureDetails() {
    this._router.navigate([
      "documents",
      { outlets: { facturesOutlet: ["facture", 113] } }
    ]);
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1500
    });
  }

  public selectRow(row) {
    this._router.navigate([
      "documents",
      { outlets: { facturesOutlet: ["facture", row.id] } }
    ]);
  }
}
