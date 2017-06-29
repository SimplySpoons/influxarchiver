import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluxComponent } from './influx.component';

describe('InfluxComponent', () => {
  let component: InfluxComponent;
  let fixture: ComponentFixture<InfluxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
