import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceLayer } from "src/app/services/backend.service";

@Component({
  selector: "app-suivi-detail",
  templateUrl: "./suivi-detail.component.html",
  styleUrls: ["./suivi-detail.component.css"]
})
export class SuiviDetailComponent implements OnInit {
  lat: number = 36.1603006;
  lng: number = 5.6983979;

  public id;
  public isLoading: boolean = false;
  public item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _serviceLayer: ServiceLayer
  ) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });

    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.isLoading = true;
      this.getSuiviDetails();
    });
  }

  public getSuiviDetails() {
    this._serviceLayer
      .facture(this.id)
      .then(item => {
        this.isLoading = false;
        this.item = Object.assign(item, status1);
      })
      .catch(err => {
        this.isLoading = false;
        console.log(err);
      });
  }
  public getClassName(step) {
    switch (step) {
      case "prep":
        if (this.item.preparation !== null) {
          return true;
        }
        break;
      case "expe":
        if (this.item.expedition !== null) {
          return true;
        }
        break;
      case "livr":
        if (this.item.livraison !== null) {
          return true;
        }
        break;
      default:
        break;
    }
  }
}

const status1 = {
  preparation: Date.now(),
  expedition: Date.now(),
  livraison: Date.now()
};
const status2 = {
  preparation: Date.now(),
  expedition: Date.now(),
  livraison: null
};

const status3 = {
  preparation: Date.now(),
  expedition: null,
  livraison: null
};

const status4 = {
  preparation: null,
  expedition: null,
  livraison: null
};
