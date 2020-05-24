import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageThemeService {
  // boolean tracker of if lightmode is enabled
  private isDarkMode = new Subject<boolean>();
  // booleans for image filtering
  // text images should be lightned as result of darkmode enabled
  // dark images should lighten on dark mode
  // background images should be darkened as a result of darkmode enabled
  // light imaged should darken on dark mode
  darkModeEnabled$ = this.isDarkMode.asObservable();
  constructor() {
    this.isDarkMode.next(false);
  }
  themeChangedToDark(){
    this.isDarkMode.next(true);
  }
  themeChangedToDefault(){
    this.isDarkMode.next(false);
  }
}
