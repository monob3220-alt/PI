import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7Cores } from './ex7-cores';

describe('Ex7Cores', () => {
  let component: Ex7Cores;
  let fixture: ComponentFixture<Ex7Cores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex7Cores],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex7Cores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
