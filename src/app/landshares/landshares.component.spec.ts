import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandsharesComponent } from './landshares.component';

describe('LandsharesComponent', () => {
  let component: LandsharesComponent;
  let fixture: ComponentFixture<LandsharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandsharesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandsharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
