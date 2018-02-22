import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterChartComponent } from './water-chart.component';

describe('WaterChartComponent', () => {
  let component: WaterChartComponent;
  let fixture: ComponentFixture<WaterChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
