import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCarouselComponent } from './vehicle-carousel.component';

describe('VehicleCarouselComponent', () => {
  let component: VehicleCarouselComponent;
  let fixture: ComponentFixture<VehicleCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
