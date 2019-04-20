import { Component, OnInit } from '@angular/core';


     

@Component({
  selector: 'app-fusion-chart',
  templateUrl: './fusion-chart.component.html',
  styleUrls: ['./fusion-chart.component.scss']
})
export class FusionChartComponent implements OnInit {
  dataSource:Object;
 
   /*-------Second Chart Width and Height-------*/
  //  width = 600;
  //  height = 400;
  //  type = "overlappedcolumn2d";
  //  dataFormat = "json";
   dataSourceSecond ;

  constructor() {
    /*----------Second Chart Data----------*/

this.dataSourceSecond= {
  "chart": {
    "caption": "Sales Targets vs Achieved",
    "subcaption": "Bilbus",
    "yaxisname": "Revenue (In USD)",
    "numberprefix": "$",
    "drawcrossline": "1",
    "theme": "fusion",
    "showvalues": "0"
  },
  "categories": [
    {
      "category": [
        {
          "label": "Oliver"
        },
        {
          "label": "Andy"
        },
        // {
        //   label: "Peter"
        // },
        // {
        //   label: "Natasha"
        // },
        // {
        //   label: "Robert"
        // },
        // {
        //   label: "Bruce"
        // },
        // {
        //   label: "Wanda"
        // }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "Target",
      "data": [
        {
          "value": "250000"
        },
        {
          "value": "200000"
        },
        // {
        //   value: "300000"
        // },
        // {
        //   value: "200000"
        // },
        // {
        //   value: "270000"
        // },
        // {
        //   value: "350000"
        // },
        // {
        //   value: "200000"
        // }
      ]
    },
    {
      "seriesname": "Achieved",
      "data": [
        {
          "value": "260000"
        },
        {
          "value": "180000"
        },
        // {
        //   value: "290000"
        // },
        // {
        //   value: "195000"
        // },
        // {
        //   value: "300000"
        // },
        // {
        //   value: "380000"
        // },
        // {
        //   value: "210000"
        // }
      ]
    }
  ]
};
   /*-----------End of Second Chart Data-----------*/

       
      // Chart Configuration
     this.dataSource ={ 
       
      "chart": {
          "caption": "Countries With Most Oil Reserves [2017-18]",
          "subCaption": "In MMbbl = One Million barrels",
          "xAxisName": "Country",
          "yAxisName": "Reserves (MMbbl)",
          "numberSuffix": "K",
          "theme": "fusion",
      },
      // Chart Data
      "data": [{
          "label": "Venezuela",
          "value": "290"
      }, {
          "label": "Saudi",
          "value": "260"
      }, {
          "label": "Canada",
          "value": "180"
      }, {
          "label": "Iran",
          "value": "140"
      }, {
          "label": "Russia",
          "value": "115"
      }, {
          "label": "UAE",
          "value": "100"
      }, {
          "label": "US",
          "value": "30"
      }, {
          "label": "China",
          "value": "30"
      }]
    }
  }
  ngOnInit() {
  }

}
