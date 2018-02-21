import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityDetailComponent } from './electricity-detail.component';

describe('ElectricityDetailComponent', () => {
  let component: ElectricityDetailComponent;
  let fixture: ComponentFixture<ElectricityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
