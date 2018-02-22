import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityChartComponent } from './electricity-chart.component';

describe('ElectricityChartComponent', () => {
  let component: ElectricityChartComponent;
  let fixture: ComponentFixture<ElectricityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
