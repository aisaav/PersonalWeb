import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  @Output() themeChanged = new EventEmitter<boolean>();
  @Output() menuOpened = new EventEmitter<boolean>();

  isDark: boolean;
  menuOpen: boolean;
  fillerNav = Array.of<string>('app-about', 'app-social', 'app-professional', 'app-hobbies-interests');

  constructor() {
    this.isDark = false;
    this.menuOpen = false;
  }

  ngOnInit(): void {

  }
  onMenuClick(){
    this.menuOpen = !this.menuOpen;
    this.menuOpened.emit(this.menuOpen);
  }
  onDisplayModeClicked(){
    this.isDark = !this.isDark;
    this.themeChanged.emit(this.isDark);
  }

}
