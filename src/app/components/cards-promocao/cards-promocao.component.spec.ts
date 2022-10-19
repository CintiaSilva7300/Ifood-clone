import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPromocaoComponent } from './cards-promocao.component';

describe('CardsPromocaoComponent', () => {
  let component: CardsPromocaoComponent;
  let fixture: ComponentFixture<CardsPromocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPromocaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
