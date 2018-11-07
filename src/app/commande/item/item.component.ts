import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { ServiceLayer } from 'src/app/services/backend.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public _code;
  public productLoading = false;
  public item;
  public Qts = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.pattern('^[0-9]+$')
  ]);
  public generiques: any[] = [];
  public selected = new FormControl(0);
  constructor(
    private activatedRoute: ActivatedRoute,
    private _serviceLayer: ServiceLayer,
    private _panierService: PanierService,
    public snackBar: MatSnackBar
  ) {}
  // ------
  // subscribe to params change,
  // ------
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this._code = params.id;
      this.generiques = [];
      this.produitDetail(this._code);
    });
  }
  // --------
  // we call detail on first route(onInit), and also on generique click,
  // ---------
  public produitDetail(code) {
    this.selected.setValue(0);
    this.productLoading = true;
    this._serviceLayer
      .produitDetail(code)
      .then(item => {
        this.productLoading = false;
        this.item = item;
        // call for generiques only after main product
        // don't recall if user clicked on a generique product
        if (this.generiques.length === 0) {
          this.loadGenerique(item.DCI);
        }
      })
      .catch(err => console.log(err));
  }
  // -------
  // load generiques
  public loadGenerique(DCI) {
    this._serviceLayer
      .produitGenerique(DCI)
      .then(items => {
        this.generiques = items;
      })
      .catch(err => console.log(err));
  }

  // change the main product to the one clicked in generique list,
  // slide only if clicked === main
  public onGeneriqueClick(code) {
    this.Qts.reset();
    if (code === this._code) {
      this.selected.setValue(0);
    } else {
      this._code = code;
      this.productLoading = true;
      this.produitDetail(code);
    }
  }
  // add the highlighted (main) product to panier
  // assign the Qts to object
  // show a 1.5s notification
  public addToPanier() {
    const itemToAdd = Object.assign(this.item, { Qts: this.Qts.value });
    this._panierService.addItem(itemToAdd);
    this.openSnackBar('Ajoutér Au panier', 'ok');
    this.Qts.reset();
  }
  // snack bar , action === dismiss (not undo)
  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1500
    });
  }
  // Error message for the input Quantité
  getErrorMessage() {
    return this.Qts.hasError('required')
      ? 'veuillez saisir une quantité  '
      : this.Qts.hasError('min')
        ? 'veuillez saisir une quantité  valid '
        : '';
  }
}
