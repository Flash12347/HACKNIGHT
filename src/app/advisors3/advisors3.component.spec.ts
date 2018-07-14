import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advisors3Component } from './advisors3.component';

describe('Advisors3Component', () => {
  let component: Advisors3Component;
  let fixture: ComponentFixture<Advisors3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advisors3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advisors3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
