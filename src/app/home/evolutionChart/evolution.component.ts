import { Component, OnInit } from "@angular/core";
import { ServiceLayer } from "src/app/services/backend.service";

@Component({
  selector: "evolution-year",
  templateUrl: "evolution.component.html"
})
export class EvolutionComponent implements OnInit {
  constructor(private _serviceLayer: ServiceLayer) {}

  ngOnInit() {
    this.initChart();
  }
  public initChart() {
    this.lineData = [
      {
        name: "2018",
        series: this._serviceLayer.chaCurrentYearByMonth()
      },
      {
        name: "2017",
        series: this._serviceLayer.chaLastYearByMonth()
      }
    ];
    console.log(this.lineData);
  }
  //options.
  view = [];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = "Legend";
  legendPosition = "right";
  showXAxisLabel = false;
  xAxisLabel = "Mois";
  showYAxisLabel = true;
  yAxisLabel = "C.A";
  animations: boolean = true;
  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  lineData = [
    /* {
      name: "Saint Martin (French Part)",
      series: [
        {
          value: 3107,
          name: "2016-09-23T19:50:31.119Z"
        },
        {
          value: 5756,
          name: "2016-09-13T10:52:26.356Z"
        },
        {
          value: 5624,
          name: "2016-09-20T01:05:52.696Z"
        }
      ]
    },
    {
      name: "Bosnia and Herzegovina",
      series: [
        {
          value: 3994,
          name: "2016-09-23T19:50:31.119Z"
        },
        {
          value: 2208,
          name: "2016-09-13T10:52:26.356Z"
        },
        {
          value: 4130,
          name: "2016-09-20T01:05:52.696Z"
        },
        {
          value: 6316,
          name: "2016-09-20T05:44:01.916Z"
        },
        {
          value: 2962,
          name: "2016-09-17T21:52:44.636Z"
        },
        {
          name: "2016-09-20T17:28:04.630Z",
          value: 4449
        },
        {
          name: "2016-09-13T14:41:02.419Z",
          value: 5605
        },
        {
          name: "2016-09-23T04:56:06.858Z",
          value: 2972
        },
        {
          name: "2016-09-19T16:30:33.758Z",
          value: 3894
        },
        {
          name: "2016-09-18T03:32:59.802Z",
          value: 4250
        },
        {
          name: "2016-09-23T12:46:34.547Z",
          value: 4020
        },
        {
          name: "2016-09-20T09:38:31.536Z",
          value: 6333
        },
        {
          name: "2016-09-15T17:00:02.425Z",
          value: 3767
        }
      ]
    }*/
  ];
}
