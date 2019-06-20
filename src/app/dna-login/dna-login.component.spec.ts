import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaLoginComponent } from './dna-login.component';

describe('DnaLoginComponent', () => {
  let component: DnaLoginComponent;
  let fixture: ComponentFixture<DnaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
