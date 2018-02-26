import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Heating} from '../model/heating';
import {HeatingService} from '../service/heating.service';

@Component({
  selector: 'app-heating-detail',
  templateUrl: './heating-detail.component.html',
  styleUrls: ['./heating-detail.component.css']
})
export class HeatingDetailComponent implements OnInit {
  @Input() heating: Heating;
  constructor(private route: ActivatedRoute,
              private heatingService: HeatingService,
              private location: Location) { }

  ngOnInit() {
    this.heating=new Heating();
    this.getRecord();
  }

  getRecord() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heatingService.getOne(id)
      .subscribe(heating => this.heating = heating);
  }
  goBack(): void {
    this.location.back();
  }
  onSubmit(): void {
    console.log("PUT to backend : " + JSON.stringify(this.heating));
    this.heatingService.update(this.heating)
      .subscribe(() => this.goBack());
  }
}
