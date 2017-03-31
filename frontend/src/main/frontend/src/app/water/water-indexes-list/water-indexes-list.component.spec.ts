import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {WaterIndexesListComponent} from "./water-indexes-list.component";

describe('WaterIndexesListComponent', () => {
  let component: WaterIndexesListComponent;
  let fixture: ComponentFixture<WaterIndexesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WaterIndexesListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterIndexesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
