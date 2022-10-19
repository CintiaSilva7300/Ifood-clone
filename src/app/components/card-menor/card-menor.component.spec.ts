import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenorComponent } from './card-menor.component';

describe('CardMenorComponent', () => {
  let component: CardMenorComponent;
  let fixture: ComponentFixture<CardMenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMenorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
