import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3Idade } from './ex3-idade';

describe('Ex3Idade', () => {
  let component: Ex3Idade;
  let fixture: ComponentFixture<Ex3Idade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex3Idade],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex3Idade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
