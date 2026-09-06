import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5Curtidas } from './ex5-curtidas';

describe('Ex5Curtidas', () => {
  let component: Ex5Curtidas;
  let fixture: ComponentFixture<Ex5Curtidas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex5Curtidas],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex5Curtidas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
