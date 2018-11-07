import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}
  public logMeIn() {
    this._auth.logIn();
    this._router.navigate(['/']);
  }
}
