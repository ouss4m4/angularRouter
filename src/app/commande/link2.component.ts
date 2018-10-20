import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-link2",
  templateUrl: "./link2.component.html",
  styleUrls: ["./link2.component.css"]
})
export class Link2Component implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}
  public tabSelected(event) {}
}
