import { Component, OnInit } from '@angular/core';
import {ElectricityService} from "../service/electricity.service";
@Component({
  selector: 'app-electricity-chart',
  templateUrl: './electricity-chart.component.html',
  styleUrls: ['./electricity-chart.component.css']
})
export class ElectricityChartComponent implements OnInit {

  multi: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Electricity';
  showYAxisLabel = true;
  yAxisLabel = 'kW/h';

  colorScheme = {
    domain: ['#0000FF', '#000000']
  };

  // line, area
  autoScale = true;
  constructor(private electricityService: ElectricityService) {

  }

  ngOnInit() {
    this.initElectricityChart();
  }
  onSelect(event) {
    console.log(event);
  }

  initElectricityChart() {
    this.electricityService.getChart()
      .subscribe(list => this.multi = list);
  }

}
