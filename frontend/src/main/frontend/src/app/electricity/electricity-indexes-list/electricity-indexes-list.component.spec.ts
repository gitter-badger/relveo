import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ElectricityIndexesListComponent} from "./electricity-indexes-list.component";

describe('ElectricityIndexesListComponent', () => {
  let component: ElectricityIndexesListComponent;
  let fixture: ComponentFixture<ElectricityIndexesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricityIndexesListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityIndexesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
