import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8Produtos } from './ex8-produtos';

describe('Ex8Produtos', () => {
  let component: Ex8Produtos;
  let fixture: ComponentFixture<Ex8Produtos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex8Produtos],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex8Produtos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
