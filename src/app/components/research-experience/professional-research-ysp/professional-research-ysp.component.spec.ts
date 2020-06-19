import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalResearchYspComponent } from './professional-research-ysp.component';

describe('ProfessionalResearchYspComponent', () => {
  let component: ProfessionalResearchYspComponent;
  let fixture: ComponentFixture<ProfessionalResearchYspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalResearchYspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalResearchYspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
