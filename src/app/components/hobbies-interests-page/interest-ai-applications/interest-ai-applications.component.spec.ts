import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestAiApplicationsComponent } from './interest-ai-applications.component';

describe('InterestAiApplicationsComponent', () => {
  let component: InterestAiApplicationsComponent;
  let fixture: ComponentFixture<InterestAiApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestAiApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestAiApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
