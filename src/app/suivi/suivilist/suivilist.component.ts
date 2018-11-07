import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { ServiceLayer } from "src/app/services/backend.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-suivilist",
  templateUrl: "./suivilist.component.html",
  styleUrls: ["./suivilist.component.css"]
})
export class SuivilistComponent implements OnInit {
  displayedColumns: string[] = ["id", "DocNum", "dateCreated", "total"];

  data: any[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private _serviceLayer: ServiceLayer, private _router: Router) {}

  ngOnInit() {
    this.isLoadingResults = true;
    this._serviceLayer
      .factures("x", "y")
      .then(data => {
        this.data = data;
        console.log(data);
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.length;
      })
      .catch(err => console.log(err));

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
  }
  public selectRow(rowData) {
    this._router.navigate(["suivi", "main", rowData.id]);
    console.log(rowData);
  }
}

/*   merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
         
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex
          );
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      )
      .subscribe(data => (this.data = data));
  } */
