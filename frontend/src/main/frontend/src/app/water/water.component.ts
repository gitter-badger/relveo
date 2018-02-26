import {Component, OnInit} from '@angular/core';
import {WaterService} from '../service/water.service';
import {Water} from '../model/water';
import {Page} from "../model/page";


@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent implements OnInit {
  multi: any[] = [];

  waterList: Water[];
  model = new Water;
  itemsPerPage: number=10;
  totalItems: any;
  page: any=1;
  previousPage: any;

  constructor(private waterService: WaterService) {

  }

  ngOnInit() {
    this.loadData();
  }


  onSubmit() {
    console.log("POST to backend : " + JSON.stringify(this.model));
    this.waterService.add(this.model)
      .subscribe(water => {
        this.loadData();
        this.refreshWaterChart();
      });
  }

  delete(water: Water): void {
    this.waterList = this.waterList.filter(e => e !== water);
    this.waterService.delete(water).subscribe();
  }

  refreshWaterChart() {
    this.waterService.getChart()
      .subscribe(list => this.multi = list);
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

  loadData() {
    this.waterService.getAllPaginate(
      this.page - 1,
      this.itemsPerPage,
    ).subscribe(
      response => {
        this.waterList = response.content;
        this.totalItems = response.totalElements;
        this.itemsPerPage=response.size;
      },
      e => console.log(e)
    )
  }
}
