import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyArtComponent } from './hobby-art.component';

describe('HobbyArtComponent', () => {
  let component: HobbyArtComponent;
  let fixture: ComponentFixture<HobbyArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
