import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentbannerComponent } from './componentbanner.component';

describe('ComponentbannerComponent', () => {
  let component: ComponentbannerComponent;
  let fixture: ComponentFixture<ComponentbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
