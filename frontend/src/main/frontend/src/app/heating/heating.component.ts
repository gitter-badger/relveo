import {Component, OnInit} from '@angular/core';
import {HeatingService} from '../service/heating.service';
import {Heating} from '../model/heating';
import {Page} from "../model/page";


@Component({
  selector: 'app-heating',
  templateUrl: './heating.component.html',
  styleUrls: ['./heating.component.css']
})
export class HeatingComponent implements OnInit {
  multi: any[] = [];

  heatingList: Heating[];
  model = new Heating;
  itemsPerPage: number=10;
  totalItems: any;
  page: any=1;
  previousPage: any;

  constructor(private heatingService: HeatingService) {

  }

  ngOnInit() {
    this.loadData();
  }


  onSubmit() {
    console.log("POST to backend : " + JSON.stringify(this.model));
    this.heatingService.add(this.model)
      .subscribe(heating => {
        this.loadData();
        this.refreshHeatingChart();
      });
  }

  delete(heating: Heating): void {
    this.heatingList = this.heatingList.filter(e => e !== heating);
    this.heatingService.delete(heating).subscribe();
  }

  refreshHeatingChart() {
    this.heatingService.getChart()
      .subscribe(list => this.multi = list);
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

  loadData() {
    this.heatingService.getAllPaginate(
      this.page - 1,
      this.itemsPerPage,
    ).subscribe(
      response => {
        this.heatingList = response.content;
        this.totalItems = response.totalElements;
        this.itemsPerPage=response.size;
      },
      e => console.log(e)
    )
  }
}
