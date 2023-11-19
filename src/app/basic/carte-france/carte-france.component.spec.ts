import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteFranceComponent } from './carte-france.component';

describe('CarteFranceComponent', () => {
  let component: CarteFranceComponent;
  let fixture: ComponentFixture<CarteFranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteFranceComponent]
    });
    fixture = TestBed.createComponent(CarteFranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
