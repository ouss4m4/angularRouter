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
  navLinks = [
    { path: "factures", label: "factures" },
    { path: "avoirs", label: "avoirs" },
    { path: "reclamations", label: "reclamations" },
    { path: "paiments", label: "paiments" }
  ];
}
