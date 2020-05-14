import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ThemeService } from '../Services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  fillerNav = Array.of<string>('app-about', 'app-social', 'app-professional', 'app-hobbies-interests');

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
  onMenuClick(){

  }
  onDisplayModeClicked(){
    this.themeService.setDarkTheme(!this.isDarkTheme);
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

}
