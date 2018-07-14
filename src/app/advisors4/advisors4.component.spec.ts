import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advisors4Component } from './advisors4.component';

describe('Advisors4Component', () => {
  let component: Advisors4Component;
  let fixture: ComponentFixture<Advisors4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advisors4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advisors4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
