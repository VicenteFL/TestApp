import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasPage } from './obras.page';

describe('ObrasPage', () => {
  let component: ObrasPage;
  let fixture: ComponentFixture<ObrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
