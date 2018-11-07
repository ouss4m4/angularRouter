import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  @ViewChild(MatSidenav)
  sidenav: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _auth: AuthService,
    private _router: Router
  ) {}
  ngOnInit() {
    this._router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }
  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: 840px)`).matches;
  }
  public logMeOut() {
    this._auth.logOut();
    this._router.navigate(['/login']);
  }
  public routeTo(str) {
    if (str === 'commande') {
      this._router.navigateByUrl('/commande/(panierOutlet:panier)');
    } else {
      this._router.navigate([str]);
    }
  }
}
