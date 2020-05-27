import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesInterestsPageComponent } from './hobbies-interests-page.component';

describe('HobbiesInterestsPageComponent', () => {
  let component: HobbiesInterestsPageComponent;
  let fixture: ComponentFixture<HobbiesInterestsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesInterestsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesInterestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
