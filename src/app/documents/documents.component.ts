import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.css"]
})
export class DocumentsComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {
    console.log('documents on init')

    this._router.navigateByUrl(
      "/documents/(facturesOutlet:factures//avoirsOutlet:avoirs//reclamationsOutlet:reclamations//paimentsOutlet:paiments)"
    , { skipLocationChange: true });
  }
  public tabSelected(event) {
    /*switch (event.index) {
      case 0:
        this._router.navigateByUrl("/documents/(facturesOutlet:factures)");
        break;
      case 1:
        this._router.navigateByUrl("/documents/(avoirsOutlet:avoirs)");
        break;
      case 2:
        this._router.navigateByUrl(
          "/documents/(reclamationsOutlet:reclamations)"
        );
        break;
      case 3:
        this._router.navigateByUrl("/documents/(paimentsOutlet:paiments)");
        break;
      default:
        break;
    }*/
  }
}
