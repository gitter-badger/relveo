import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ElectricityModalComponent} from "./electricity-modal.component";

describe('ElectricityModalComponent', () => {
  let component: ElectricityModalComponent;
  let fixture: ComponentFixture<ElectricityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricityModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
