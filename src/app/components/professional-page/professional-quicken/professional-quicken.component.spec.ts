import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalQuickenComponent } from './professional-quicken.component';

describe('ProfessionalQuickenComponent', () => {
  let component: ProfessionalQuickenComponent;
  let fixture: ComponentFixture<ProfessionalQuickenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalQuickenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalQuickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
