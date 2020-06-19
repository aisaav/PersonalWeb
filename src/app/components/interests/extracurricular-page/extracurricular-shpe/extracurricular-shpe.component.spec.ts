import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracurricularShpeComponent } from './extracurricular-shpe.component';

describe('ExtracurricularShpeComponent', () => {
  let component: ExtracurricularShpeComponent;
  let fixture: ComponentFixture<ExtracurricularShpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtracurricularShpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtracurricularShpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
