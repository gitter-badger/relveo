import {Component, OnInit} from '@angular/core';
import {ElectricityService} from "./electricity.service";
import {Electricity} from "./electricity";


@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit {
  electricityList: Electricity[];

  constructor(private electricityService: ElectricityService) {

  }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.electricityService.getAll()
      .subscribe(list => this.electricityList = list);
  }

  add(statementDate: Date, dayIndex: number, nightIndex: number): void {

    this.electricityService.add({statementDate, dayIndex, nightIndex} as Electricity)
      .subscribe(electricity => {
        this.electricityList.push(electricity);
      });
  }

  delete(electricity: Electricity): void {
    this.electricityList = this.electricityList.filter(e => e !== electricity);
    this.electricityService.delete(electricity).subscribe();
  }
}
