import {Component, OnDestroy, OnInit} from '@angular/core';
import {ImageThemeService} from '../../Services/image-theme-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  breakpoint: number;
  rowpoint: number;
  updateImg: boolean;
  subscription: Subscription;
  constructor(private imageThemer: ImageThemeService) {
    this.subscription = imageThemer.darkModeEnabled$.subscribe(
      darkModeEnabled => {
        this.updateImg = darkModeEnabled;
    });
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 3;
    this.rowpoint = (window.innerWidth <= 500) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 3;
    this.rowpoint = (window.innerWidth <= 500) ? 1 : 2;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
