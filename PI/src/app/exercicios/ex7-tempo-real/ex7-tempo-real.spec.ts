import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7TempoReal } from './ex7-tempo-real';

describe('Ex7TempoReal', () => {
  let component: Ex7TempoReal;
  let fixture: ComponentFixture<Ex7TempoReal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex7TempoReal],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex7TempoReal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
