import { TestBed } from '@angular/core/testing';

import { ImageThemeService } from './image-theme-service.service';

describe('ImageThemeService', () => {
  let service: ImageThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
