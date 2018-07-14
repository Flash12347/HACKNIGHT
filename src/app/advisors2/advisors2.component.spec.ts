import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advisors2Component } from './advisors2.component';

describe('Advisors2Component', () => {
  let component: Advisors2Component;
  let fixture: ComponentFixture<Advisors2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advisors2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advisors2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
