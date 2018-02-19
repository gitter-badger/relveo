import { Component, OnInit } from '@angular/core';
import {ElectricityService} from "../electricity/electricity.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  multi: any[];

  view: any[] = [550, 650];

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
