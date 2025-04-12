import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTypeComponent } from './add-new-type.component';

describe('AddNewTypeComponent', () => {
  let component: AddNewTypeComponent;
  let fixture: ComponentFixture<AddNewTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
