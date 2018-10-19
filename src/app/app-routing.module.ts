import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthguardService } from "./services/authguard.service";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    canActivate: [AuthguardService],
    loadChildren: "./navbar/navbar.module#NavbarModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
