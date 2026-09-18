import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Estoque } from './ex4-estoque';

describe('Ex4Estoque', () => {
  let component: Ex4Estoque;
  let fixture: ComponentFixture<Ex4Estoque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4Estoque],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex4Estoque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
