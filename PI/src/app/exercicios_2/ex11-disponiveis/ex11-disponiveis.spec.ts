import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex11Disponiveis } from './ex11-disponiveis';

describe('Ex11Disponiveis', () => {
  let component: Ex11Disponiveis;
  let fixture: ComponentFixture<Ex11Disponiveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex11Disponiveis],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex11Disponiveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
