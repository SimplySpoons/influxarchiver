import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSingleComponent } from './vehicle-single.component';

describe('VehicleSingleComponent', () => {
  let component: VehicleSingleComponent;
  let fixture: ComponentFixture<VehicleSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
