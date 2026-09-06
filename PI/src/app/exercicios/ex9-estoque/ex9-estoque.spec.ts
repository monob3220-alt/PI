import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex9Estoque } from './ex9-estoque';

describe('Ex9Estoque', () => {
  let component: Ex9Estoque;
  let fixture: ComponentFixture<Ex9Estoque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex9Estoque],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex9Estoque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
