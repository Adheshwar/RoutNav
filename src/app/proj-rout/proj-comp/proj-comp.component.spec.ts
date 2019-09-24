import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjCompComponent } from './proj-comp.component';

describe('ProjCompComponent', () => {
  let component: ProjCompComponent;
  let fixture: ComponentFixture<ProjCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
