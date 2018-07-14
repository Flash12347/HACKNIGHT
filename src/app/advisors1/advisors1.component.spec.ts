import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advisors1Component } from './advisors1.component';

describe('Advisors1Component', () => {
  let component: Advisors1Component;
  let fixture: ComponentFixture<Advisors1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advisors1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advisors1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
