import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ServiceLayer } from "./backend.service";

@Injectable()
export class FactureDetailService {
  private dataStore: {
    factureDetails: Array<any>;
  };

  private _factureDetails: BehaviorSubject<any[]>;

  constructor(private _serviceLayer: ServiceLayer) {
    this.dataStore = { factureDetails: [] };
    this._factureDetails = <BehaviorSubject<any[]>>new BehaviorSubject([]);
  }
  public fetchDetails(id) {
    this._serviceLayer.facture(id).then(items => {
      this.dataStore.factureDetails = items;
      this._factureDetails.next(
        Object.assign({}, this.dataStore).factureDetails
      );
      console.log(this.dataStore.factureDetails);
    });
  }

  public get items() {
    return this._factureDetails.asObservable();
  }

  public publish() {
    this._factureDetails.next(Object.assign({}, this.dataStore).factureDetails);
  }
}
