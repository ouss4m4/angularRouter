import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-suivi",
  templateUrl: "./suivi.component.html",
  styleUrls: ["./suivi.component.css"]
})
export class SuiviComponent implements OnInit {
  constructor(private _router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  public suiviDetails() {
    this._router.navigateByUrl("suivi/riad/(suiviOutlet:suiviDetails)");
    /*   console.log("routing ...");

    this._router.navigate([{ outlets: { suiviDetails: ["suiviDetails"] } }], {
      relativeTo: this.route
    }); */
  }
}
