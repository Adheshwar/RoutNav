import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServCompComponent } from './serv-comp.component';

describe('ServCompComponent', () => {
  let component: ServCompComponent;
  let fixture: ComponentFixture<ServCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
