import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterDetailComponent } from './water-detail.component';

describe('WaterDetailComponent', () => {
  let component: WaterDetailComponent;
  let fixture: ComponentFixture<WaterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
