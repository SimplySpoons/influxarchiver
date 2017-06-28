import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSingleComponent } from './account-single.component';

describe('AccountSingleComponent', () => {
  let component: AccountSingleComponent;
  let fixture: ComponentFixture<AccountSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
