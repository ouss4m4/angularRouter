import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.css"]
})
export class DocumentsComponent implements OnInit {
  constructor(
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

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
