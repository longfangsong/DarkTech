import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMathComponent } from './basic-math.component';

describe('BasicMathComponent', () => {
  let component: BasicMathComponent;
  let fixture: ComponentFixture<BasicMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
