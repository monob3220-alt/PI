import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2Calculo } from './ex2-calculo';

describe('Ex2Calculo', () => {
  let component: Ex2Calculo;
  let fixture: ComponentFixture<Ex2Calculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex2Calculo],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex2Calculo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
