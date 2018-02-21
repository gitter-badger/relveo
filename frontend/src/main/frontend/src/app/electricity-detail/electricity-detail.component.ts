import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Electricity} from '../model/electricity';
import {ElectricityService} from '../service/electricity.service';

@Component({
  selector: 'app-electricity-detail',
  templateUrl: './electricity-detail.component.html',
  styleUrls: ['./electricity-detail.component.css']
})
export class ElectricityDetailComponent implements OnInit {
  @Input() electricity: Electricity;
  constructor(private route: ActivatedRoute,
              private electricityService: ElectricityService,
              private location: Location) { }

  ngOnInit() {
    this.electricity=new Electricity();
    this.getRecord();
  }

  getRecord() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.electricityService.getOne(id)
      .subscribe(electricity => this.electricity = electricity);
  }
  goBack(): void {
    this.location.back();
  }
  onSubmit(): void {
    console.log("PUT to backend : " + JSON.stringify(this.electricity));
    this.electricityService.update(this.electricity)
      .subscribe(() => this.goBack());
  }
}
