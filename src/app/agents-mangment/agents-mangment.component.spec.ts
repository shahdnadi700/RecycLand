import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsMangmentComponent } from './agents-mangment.component';

describe('AgentsMangmentComponent', () => {
  let component: AgentsMangmentComponent;
  let fixture: ComponentFixture<AgentsMangmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentsMangmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentsMangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
