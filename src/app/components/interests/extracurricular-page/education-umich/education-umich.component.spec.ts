import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationUmichComponent } from './education-umich.component';

describe('EducationUmichComponent', () => {
  let component: EducationUmichComponent;
  let fixture: ComponentFixture<EducationUmichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationUmichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationUmichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
