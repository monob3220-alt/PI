import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2Usuario } from './ex2-usuario';

describe('Ex2Usuario', () => {
  let component: Ex2Usuario;
  let fixture: ComponentFixture<Ex2Usuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex2Usuario],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex2Usuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
