import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Water} from '../model/water';
import {WaterService} from '../service/water.service';

@Component({
  selector: 'app-water-detail',
  templateUrl: './water-detail.component.html',
  styleUrls: ['./water-detail.component.css']
})
export class WaterDetailComponent implements OnInit {
  @Input() water: Water;
  constructor(private route: ActivatedRoute,
              private waterService: WaterService,
              private location: Location) { }

  ngOnInit() {
    this.water=new Water();
    this.getRecord();
  }

  getRecord() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.waterService.getOne(id)
      .subscribe(water => this.water = water);
  }
  goBack(): void {
    this.location.back();
  }
  onSubmit(): void {
    console.log("PUT to backend : " + JSON.stringify(this.water));
    this.waterService.update(this.water)
      .subscribe(() => this.goBack());
  }
}
