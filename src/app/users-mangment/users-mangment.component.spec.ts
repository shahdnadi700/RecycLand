import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMangmentComponent } from './users-mangment.component';

describe('UsersMangmentComponent', () => {
  let component: UsersMangmentComponent;
  let fixture: ComponentFixture<UsersMangmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersMangmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersMangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
