import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingChartComponent } from './heating-chart.component';

describe('HeatingChartComponent', () => {
  let component: HeatingChartComponent;
  let fixture: ComponentFixture<HeatingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
