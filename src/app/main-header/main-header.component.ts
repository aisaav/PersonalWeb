import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  @Output() themeChanged = new EventEmitter<boolean>();
  isDark: boolean;
  fillerNav = Array.of<string>('app-about', 'app-social', 'app-professional', 'app-hobbies-interests');

  constructor() {
    this.isDark = false;
  }

  ngOnInit(): void {

  }
  onMenuClick(){

  }
  onDisplayModeClicked(){
    this.isDark = !this.isDark;
    this.themeChanged.emit(this.isDark);
  }

}
