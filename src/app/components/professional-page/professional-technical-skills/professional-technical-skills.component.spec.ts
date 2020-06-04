import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalTechnicalSkillsComponent } from './professional-technical-skills.component';

describe('ProfessionalTechnicalSkillsComponent', () => {
  let component: ProfessionalTechnicalSkillsComponent;
  let fixture: ComponentFixture<ProfessionalTechnicalSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalTechnicalSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalTechnicalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
