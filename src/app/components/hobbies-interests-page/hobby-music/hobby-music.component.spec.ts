import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyMusicComponent } from './hobby-music.component';

describe('HobbyMusicComponent', () => {
  let component: HobbyMusicComponent;
  let fixture: ComponentFixture<HobbyMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
