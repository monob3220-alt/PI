import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6Contador } from './ex6-contador';

describe('Ex6Contador', () => {
  let component: Ex6Contador;
  let fixture: ComponentFixture<Ex6Contador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex6Contador],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex6Contador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
