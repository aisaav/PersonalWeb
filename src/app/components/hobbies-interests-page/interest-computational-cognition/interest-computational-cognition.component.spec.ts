import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestComputationalCognitionComponent } from './interest-computational-cognition.component';

describe('InterestComputationalCognitionComponent', () => {
  let component: InterestComputationalCognitionComponent;
  let fixture: ComponentFixture<InterestComputationalCognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestComputationalCognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestComputationalCognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
