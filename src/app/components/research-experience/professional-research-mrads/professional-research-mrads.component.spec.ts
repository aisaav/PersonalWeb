import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalResearchMradsComponent } from './professional-research-mrads.component';

describe('ProfessionalResearchMradsComponent', () => {
  let component: ProfessionalResearchMradsComponent;
  let fixture: ComponentFixture<ProfessionalResearchMradsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalResearchMradsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalResearchMradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
