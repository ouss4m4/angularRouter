import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceLayer } from "src/app/services/backend.service";
import { MatTableDataSource, MatPaginator } from "@angular/material";

@Component({
  selector: "app-facture-detail",
  templateUrl: "./facture-detail.component.html",
  styleUrls: ["./facture-detail.component.css"]
})
export class FactureDetailComponent implements OnInit {
  //set variables
  public factureId = this.route.snapshot.params.id;
  public facture;
  public factureDetails: MatTableDataSource<any> = new MatTableDataSource<
    any
  >();
  public isLoading: boolean = false;
  public displayedColumns: string[] = ["name", "prixUnit", "Qts", "Total"];
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private _serviceLayer: ServiceLayer
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.fetchDetails(this.factureId);
  }

  public fetchDetails(id) {
    this._serviceLayer
      .facture(id)
      .then(items => {
        this.facture = items;
        this.isLoading = false;
        this.factureDetails = new MatTableDataSource<any>(items.DocLines);
        this.factureDetails.paginator = this.paginator;
        console.log(this.facture);
      })
      .catch(err => console.log(err));
  }
}
