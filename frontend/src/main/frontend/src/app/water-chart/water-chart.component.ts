import {Component, Input, OnInit} from '@angular/core';
import {WaterService} from "../service/water.service";

@Component({
  selector: 'app-water-chart',
  templateUrl: './water-chart.component.html',
  styleUrls: ['./water-chart.component.css']
})
export class WaterChartComponent implements OnInit {
  @Input()
  multi: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Water';
  showYAxisLabel = true;
  yAxisLabel = 'm³';

  colorScheme = {
    domain: ['#0000FF']
  };

  // line, area
  autoScale = true;
  constructor(private waterService: WaterService) {

  }

  ngOnInit() {
    this.initWaterChart();
  }
  onSelect(event) {
    console.log(event);
  }

  initWaterChart() {
    this.waterService.getChart()
      .subscribe(list => this.multi = list);
  }

}
