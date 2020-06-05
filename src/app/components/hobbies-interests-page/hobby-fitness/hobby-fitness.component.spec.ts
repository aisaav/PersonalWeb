import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyFitnessComponent } from './hobby-fitness.component';

describe('HobbyFitnessComponent', () => {
  let component: HobbyFitnessComponent;
  let fixture: ComponentFixture<HobbyFitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyFitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
