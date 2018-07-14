import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advisors5Component } from './advisors5.component';

describe('Advisors5Component', () => {
  let component: Advisors5Component;
  let fixture: ComponentFixture<Advisors5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advisors5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advisors5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
