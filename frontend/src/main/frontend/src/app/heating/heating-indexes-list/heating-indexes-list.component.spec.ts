import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {HeatingIndexesListComponent} from "./heating-indexes-list.component";

describe('HeatingIndexesListComponent', () => {
  let component: HeatingIndexesListComponent;
  let fixture: ComponentFixture<HeatingIndexesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeatingIndexesListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatingIndexesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
