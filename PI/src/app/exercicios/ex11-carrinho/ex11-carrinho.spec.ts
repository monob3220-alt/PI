import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex11Carrinho } from './ex11-carrinho';

describe('Ex11Carrinho', () => {
  let component: Ex11Carrinho;
  let fixture: ComponentFixture<Ex11Carrinho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex11Carrinho],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex11Carrinho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
