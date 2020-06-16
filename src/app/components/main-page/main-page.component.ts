import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ImageThemeService} from '../../Services/image-theme-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  width: number;
  height: number;
  prevInner: number;
  updateImg: boolean;
  subscription: Subscription;
  constructor(private imageThemer: ImageThemeService) {
    this.subscription = imageThemer.darkModeEnabled$.subscribe(
      darkModeEnabled => {
        this.updateImg = darkModeEnabled;
    });
  }

  ngOnInit(): void {
    this.width = (window.innerWidth <= 500) ? 280 : 500;
    this.height = (window.innerWidth <= 500) ? 350 : 642;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = (event.target.innerWidth <= 1400) ? (this.width - (this.width * 0.02)) : 500;
    this.height = (event.target.innerWidth <= 1400) ? (this.height - (this.height * 0.02)) : 642;
    if (event.target.innerWidth > this.prevInner){
      this.width = (this.width + (this.width * 0.04));
      this.height = (this.height + (this.height * 0.04));
    }
    this.prevInner = event.target.innerWidth;
    if (this.width < 280){
      this.width = 280;
    }
    if (this.height < 350){
      this.height = 350;
    }
    if(this.width > 500){
      this.width = 500;
    }
    if(this.height > 642){
      this.height = 642;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
