import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ServiceLayer } from "./backend.service";

@Injectable()
export class FactureService {
  private dataStore: {
    factures: Array<any>;
  };

  private _factures: BehaviorSubject<any[]>;

  constructor(private _serviceLayer: ServiceLayer) {
    this.dataStore = { factures: [] };
    this._factures = <BehaviorSubject<any[]>>new BehaviorSubject([]);
  }
  public fetchByDate(date1, date2) {
    this._serviceLayer.factures(date1, date2).then(items => {
      this.dataStore.factures = items;
      this._factures.next(Object.assign({}, this.dataStore).factures);
      console.log(this.dataStore.factures);
    });
  }

  public get items() {
    return this._factures.asObservable();
  }

  public publish() {
    this._factures.next(Object.assign({}, this.dataStore).factures);
  }
}
