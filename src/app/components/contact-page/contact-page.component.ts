import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ImageThemeService} from '../../Services/image-theme-service.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit, OnDestroy {
  updateImg: boolean;
  subscription: Subscription;
  constructor(private imageThemer: ImageThemeService) {
    this.subscription = imageThemer.darkModeEnabled$.subscribe(
      darkModeEnabled => {
        this.updateImg = darkModeEnabled;
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
