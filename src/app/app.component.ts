import {Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from './Services/httpservice.service';
import { takeUntil } from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {OverlayContainer} from '@angular/cdk/overlay';
import {MatIconRegistry} from '@angular/material/icon';
import { ImageThemeService } from './Services/image-theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  constructor(private appService: HttpService, public titleService: Title, private overlayContainer: OverlayContainer,
              private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,
              public imageThemer: ImageThemeService) {
    imageThemer = new ImageThemeService();
    overlayContainer.getContainerElement().classList.add('default-theme');
    this.setTitle();
    this.matIconRegistry.addSvgIcon(
      `main_icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/ic_product_icon_192px.svg`)
    );
  }
  @HostBinding('class') componentCssClass;

  title = 'Alexandra\'s Site';
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.nullValidator && Validators.required),
    lastName: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required)
  });
  users: any[] = [];
  userCount = 0;
  showMenu = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  onSubmit() {
    this.appService.addUser(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.userCount = this.userCount + 1;
      console.log(this.userCount);
      this.userForm.reset();
    });
  }

  themeChange(): void{
    if (this.overlayContainer.getContainerElement().classList.contains('default-theme')) {
      this.overlayContainer.getContainerElement().classList.remove('default-theme');
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.componentCssClass = 'dark-theme';
      this.imageThemer.themeChangedToDark();
    } else if (this.overlayContainer.getContainerElement().classList.contains('dark-theme')) {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
      this.overlayContainer.getContainerElement().classList.add('default-theme');
      this.componentCssClass = 'default-theme';
      this.imageThemer.themeChangedToDefault();
    } else {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.componentCssClass = 'dark-theme';
      this.imageThemer.themeChangedToDark();
    }
  }
  menuOpen(): void{
    this.showMenu = !this.showMenu;
  }
  getAllUsers() {
    this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
      this.users = users;
    });
  }
  public setTitle() {
    this.titleService.setTitle( this.title );
  }
  ngOnInit(){
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
