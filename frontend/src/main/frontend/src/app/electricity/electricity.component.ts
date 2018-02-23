import {Component, OnInit} from '@angular/core';
import {ElectricityService} from '../service/electricity.service';
import {Electricity} from '../model/electricity';
import {Page} from "../model/page";


@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit {
  multi: any[] = [];

  electricityList: Electricity[];
  model = new Electricity;
  itemsPerPage: number=10;
  totalItems: any;
  page: any=1;
  previousPage: any;

  constructor(private electricityService: ElectricityService) {

  }

  ngOnInit() {
    this.loadData();
  }


  onSubmit() {
    console.log("POST to backend : " + JSON.stringify(this.model));
    this.electricityService.add(this.model)
      .subscribe(electricity => {
        this.loadData();
        //this.electricityList.unshift(electricity);
        this.refreshElectricityChart();
      });
  }

  delete(electricity: Electricity): void {
    this.electricityList = this.electricityList.filter(e => e !== electricity);
    this.electricityService.delete(electricity).subscribe();
  }

  refreshElectricityChart() {
    this.electricityService.getChart()
      .subscribe(list => this.multi = list);
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

  loadData() {
    this.electricityService.getAllPaginate(
      this.page - 1,
      this.itemsPerPage,
    ).subscribe(
      response => {
        this.electricityList = response.content;
        this.totalItems = response.totalElements;
        this.itemsPerPage=response.size;
      },
      e => console.log(e)
    )
  }
}
