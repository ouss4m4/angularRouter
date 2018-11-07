import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private status = false;
  constructor() {}
  public isLogged() {
    // console.log("authservice.islogged() called, status is : " + this.status);
    return this.status;
  }
  public logIn() {
    this.status = true;
    // console.log("authservice.login()  called, status is : " + this.status);
  }
  public logOut() {
    this.status = false;
    // console.log("authservice.logout()  called, status is : " + this.status);
  }
}
