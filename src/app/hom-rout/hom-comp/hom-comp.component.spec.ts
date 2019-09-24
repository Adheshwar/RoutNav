import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomCompComponent } from './hom-comp.component';

describe('HomCompComponent', () => {
  let component: HomCompComponent;
  let fixture: ComponentFixture<HomCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
