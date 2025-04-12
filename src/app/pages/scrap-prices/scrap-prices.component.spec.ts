import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapPricesComponent } from './scrap-prices.component';

describe('ScrapPricesComponent', () => {
  let component: ScrapPricesComponent;
  let fixture: ComponentFixture<ScrapPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrapPricesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrapPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
