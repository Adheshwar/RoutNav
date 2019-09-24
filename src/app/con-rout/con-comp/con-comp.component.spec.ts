import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConCompComponent } from './con-comp.component';

describe('ConCompComponent', () => {
  let component: ConCompComponent;
  let fixture: ComponentFixture<ConCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
