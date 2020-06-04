import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAmexComponent } from './professional-amex.component';

describe('ProfessionalAmexComponent', () => {
  let component: ProfessionalAmexComponent;
  let fixture: ComponentFixture<ProfessionalAmexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalAmexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalAmexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
