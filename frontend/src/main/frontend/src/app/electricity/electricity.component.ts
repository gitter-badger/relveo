import {Component, OnInit} from '@angular/core';
import {ElectricityService} from '../service/electricity.service';
import {Electricity} from '../model/electricity';


@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit {
  electricityList: Electricity[];
  model= new Electricity;

  constructor(private electricityService: ElectricityService) {

  }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.electricityService.getAll()
      .subscribe(list => this.electricityList = list);
  }

  onSubmit() {
    console.log("POST to backend : " + JSON.stringify(this.model));
    this.electricityService.add(this.model)
      .subscribe(electricity => {
        this.electricityList.push(electricity);
      });
  }

  delete(electricity: Electricity): void {
    this.electricityList = this.electricityList.filter(e => e !== electricity);
    this.electricityService.delete(electricity).subscribe();
  }
}
