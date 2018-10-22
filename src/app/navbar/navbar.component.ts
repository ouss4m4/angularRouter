import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _auth: AuthService,
    private _router: Router
  ) {}
  public logMeOut() {
    this._auth.logOut();
    this._router.navigate(["/login"]);
  }
  public routeTo(str) {
    if (str === "commande") {
      this._router.navigateByUrl("/commande/(panierOutlet:panier)");
    } else if (str === "documents") {
      this._router.navigateByUrl(
        "/documents/(facturesOutlet:factures//avoirsOutlet:avoirs//reclamationsOutlet:reclamations//paimentsOutlet:paiments)",
        { skipLocationChange: true }
      );
    } else {
      this._router.navigate([str]);
    }
  }
}
