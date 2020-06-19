import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestAiApproachesComponent } from './interest-ai-approaches.component';

describe('InterestAiApproachesComponent', () => {
  let component: InterestAiApproachesComponent;
  let fixture: ComponentFixture<InterestAiApproachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestAiApproachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestAiApproachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
