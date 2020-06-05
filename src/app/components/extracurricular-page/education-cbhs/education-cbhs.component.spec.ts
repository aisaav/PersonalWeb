import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCbhsComponent } from './education-cbhs.component';

describe('EducationCbhsComponent', () => {
  let component: EducationCbhsComponent;
  let fixture: ComponentFixture<EducationCbhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationCbhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCbhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
