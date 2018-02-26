import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingDetailComponent } from './heating-detail.component';

describe('HeatingDetailComponent', () => {
  let component: HeatingDetailComponent;
  let fixture: ComponentFixture<HeatingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
