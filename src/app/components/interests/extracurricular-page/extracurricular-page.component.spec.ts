import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracurricularPageComponent } from './extracurricular-page.component';

describe('ExtracurricularPageComponent', () => {
  let component: ExtracurricularPageComponent;
  let fixture: ComponentFixture<ExtracurricularPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtracurricularPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtracurricularPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
