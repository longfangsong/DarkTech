import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationDisplayCardComponent } from './calculation-display-card.component';

describe('CalculationDisplayCardComponent', () => {
  let component: CalculationDisplayCardComponent;
  let fixture: ComponentFixture<CalculationDisplayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationDisplayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
