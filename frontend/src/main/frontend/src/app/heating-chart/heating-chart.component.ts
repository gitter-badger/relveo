import {Component, Input, OnInit} from '@angular/core';
import {HeatingService} from "../service/heating.service";

@Component({
  selector: 'app-heating-chart',
  templateUrl: './heating-chart.component.html',
  styleUrls: ['./heating-chart.component.css']
})
export class HeatingChartComponent implements OnInit {
  @Input()
  multi: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Heating';
  showYAxisLabel = true;
  yAxisLabel = 'L';

  colorScheme = {
    domain: ['#FF0000']
  };

  // line, area
  autoScale = true;
  constructor(private heatingService: HeatingService) {

  }

  ngOnInit() {
    this.initHeatingChart();
  }
  onSelect(event) {
    console.log(event);
  }

  initHeatingChart() {
    this.heatingService.getChart()
      .subscribe(list => this.multi = list);
  }

}
