import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-suivi-detail",
  templateUrl: "./suivi-detail.component.html",
  styleUrls: ["./suivi-detail.component.css"]
})
export class SuiviDetailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(" suivi Details initiated");
    console.log(this.activatedRoute.snapshot.paramMap.get("id"));
  }
}
