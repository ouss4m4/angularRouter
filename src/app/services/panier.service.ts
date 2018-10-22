import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PanierService {
  private dataStore: {
    items: Array<any>;
  };

  public _items: BehaviorSubject<any[]>;

  constructor() {
    this.dataStore = { items: [] };
    this._items = <BehaviorSubject<any[]>>new BehaviorSubject([]);
  }

  public get items() {
    return this._items.asObservable();
  }
  public publish() {
    this._items.next(Object.assign({}, this.dataStore).items);
  }
  public editItem(info) {
    this.dataStore.items.forEach(item => {
      if (item.Code === info.Code) {
        item.Qts = info.Qts;
      }
    });
    this.publish();
  }

  public removeItem(id) {
    this.dataStore.items = this.dataStore.items.filter(item => item.Code !== id);
    this.publish();
  }

  public addItem(item) {
    this.dataStore.items.push(item);
    this.publish();
  }
}
