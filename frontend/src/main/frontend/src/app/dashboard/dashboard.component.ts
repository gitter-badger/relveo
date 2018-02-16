import { Component, OnInit } from '@angular/core';
import {multi} from './data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  multi: any[];

  view: any[] = [550, 700];

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
  constructor() {
    Object.assign(this, {multi})
  }

  ngOnInit() {
  }
  onSelect(event) {
    console.log(event);
  }
}
