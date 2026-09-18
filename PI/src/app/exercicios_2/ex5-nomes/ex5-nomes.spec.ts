import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5Nomes } from './ex5-nomes';

describe('Ex5Nomes', () => {
  let component: Ex5Nomes;
  let fixture: ComponentFixture<Ex5Nomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex5Nomes],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex5Nomes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
