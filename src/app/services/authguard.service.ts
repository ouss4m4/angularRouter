import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthguardService implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}
  canActivate() {
    console.log("-----can activate fired \n --- " + this._auth.isLogged());
    if (this._auth.isLogged()) {
      return true;
    } else {
      this._router.navigate(["/login"]);
      return false;
    }
  }
}
