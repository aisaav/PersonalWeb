import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalTechnicalProjectsAndSetupsComponent } from './professional-technical-projects-and-setups.component';

describe('ProfessionalTechnicalProjectsAndSetupsComponent', () => {
  let component: ProfessionalTechnicalProjectsAndSetupsComponent;
  let fixture: ComponentFixture<ProfessionalTechnicalProjectsAndSetupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalTechnicalProjectsAndSetupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalTechnicalProjectsAndSetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
