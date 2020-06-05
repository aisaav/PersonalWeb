import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracurricularMradsComponent } from './extracurricular-mrads.component';

describe('ExtracurricularMradsComponent', () => {
  let component: ExtracurricularMradsComponent;
  let fixture: ComponentFixture<ExtracurricularMradsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtracurricularMradsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtracurricularMradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
